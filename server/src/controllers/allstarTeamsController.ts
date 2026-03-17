import { Response, Request } from "express";
import { prisma } from "../database/prisma.js";
import { createBuildTeamSchema } from "../schemas/buildTeams.js";
import z from "zod";

type CreateBuildTeamInput = z.infer<typeof createBuildTeamSchema>;

export async function createAllstarTeam(req: Request, res: Response) {
  const body = (req as any).validatedBody as CreateBuildTeamInput;
  const userId = req.userId;

  try {
    const data = await prisma.allstarTeam.create({
      data: {
        user: { connect: { id: userId } },
        ...body,
      },
      include: {
        user: { select: { id: true, name: true } },
      },
    });

    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}

export async function fetchAllstarTeams(req: Request, res: Response) {
  try {
    const data = await prisma.allstarTeam.findMany({
      select: {
        id: true,
        user: { select: { id: true, name: true } },
        athleteIds: true,
      },
    });
    console.log(data);
    return res.json(data);
  } catch (err) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
}
