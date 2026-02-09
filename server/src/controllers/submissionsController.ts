import type { Request, Response } from "express";
import { prisma } from "../database/prisma.js";
import { createSubmissionSchema } from "../schemas/submissions.js";
import z from "zod";

type CreateSubmissionSchema = z.infer<typeof createSubmissionSchema>;

export async function createSubmission(req: Request, res: Response) {
  const body = (req as any).validatedBody as CreateSubmissionSchema;

  const userId = req.userId;
  if (!userId) {
    return res.status(400).json({ error: "Missing user" });
  }

  try {
    const submission = await prisma.attributeSubmission.create({
      data: {
        user: { connect: { id: userId } },
        ...body,
      },
      include: {
        user: {
          select: { id: true, name: true },
        },
      },
    });

    return res.status(201).json(submission);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
