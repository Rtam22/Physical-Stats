import { Response, Request } from "express";
import { prisma } from "../database/prisma.js";
import { createBuildTeamSchema } from "../schemas/buildTeams.js";
import z from "zod";

type CreateBuildTeamInput = z.infer<typeof createBuildTeamSchema>;

export async function createBuildTeams(req: Request, res: Response) {
  const body = (req as any).validatedBody as CreateBuildTeamInput;
  const userId = req.userId;

  try {
    const buildTeam = await prisma.buildTeam.create({
      data: {
        user: { connect: { id: userId } },
        ...body,
      },
      include: {
        user: { select: { id: true, name: true } },
      },
    });
    return res.status(204).json(buildTeam);
  } catch (err) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
