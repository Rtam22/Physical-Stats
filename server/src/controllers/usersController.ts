import type { Request, Response } from "express";
import { prisma } from "../database/prisma.js";
import { createUserSchema } from "../schemas/users.js";
import z from "zod";
import { Prisma } from "@prisma/client";

type CreateUserSchema = z.infer<typeof createUserSchema>;

export async function createUser(req: Request, res: Response) {
  const body = req.validatedBody as CreateUserSchema;

  try {
    const user = await prisma.user.create({
      data: {
        ...body,
      },
    });
    return res.status(201).json(user);
  } catch (err: unknown) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2002"
    ) {
      return res.status(400).json({
        error: "Username already exists",
      });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
}
