import type { Request, Response } from "express";
import { prisma } from "../database/prisma.js";

export async function fetchUnlockAthletes(req: Request, res: Response) {
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ error: "Missing user-id header" });
  }

  try {
    const unlockedAthletes = await prisma.unlockedAthletes.findMany({
      where: { userId },
      select: { userId: true, athleteIds: true },
    });
    return res.status(200).json(unlockedAthletes);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
}
