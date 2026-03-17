import type { Request, Response } from "express";
import { prisma } from "../database/prisma.js";
import { createUnlockAthleteSchema } from "../schemas/unlockAthlete.js";
import z from "zod";

type CreateSubmissionSchema = z.infer<typeof createUnlockAthleteSchema>;

export async function fetchUnlockAthletes(req: Request, res: Response) {
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ error: "Missing user-id header" });
  }

  try {
    const unlockedAthletes = await prisma.unlockedAthletes.findUnique({
      where: { userId },
      select: { athleteIds: true },
    });
    return res.status(200).json(unlockedAthletes?.athleteIds ?? []);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function postUnlockAthletes(req: Request, res: Response) {
  const userId = req.userId;
  const body = (req as any).validatedBody as CreateSubmissionSchema;

  if (!userId) {
    return res.status(401).json({ error: "Missing user-id header" });
  }

  try {
    const unlocked = await prisma.unlockedAthletes.upsert({
      where: { userId },
      create: {
        userId,
        athleteIds: body.athleteIds,
      },
      update: {
        athleteIds: body.athleteIds,
      },
      select: { athleteIds: true },
    });

    return res.status(200).json(unlocked?.athleteIds ?? []);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
}
