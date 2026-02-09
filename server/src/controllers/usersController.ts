import type { Request, Response } from "express";
import { prisma } from "../database/prisma.js";
import { createUserSchema } from "../schemas/users.js";
import z from "zod";

type CreateUserSchema = z.infer<typeof createUserSchema>;

export async function createUser(res: Response, req: Request) {
  const body = req.validatedBody as CreateUserSchema;

  try {
    const user = await prisma.user.create({
      data: {
        ...body,
      },
    });
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
