import z from "zod";
import { userSchema } from "./users.js";

export const createBuildTeamSchema = z.object({
  athleteIds: z
    .array(z.string().min(1))
    .length(6)
    .refine((ids) => new Set(ids).size === ids.length),
});

export const buildTeamSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  user: userSchema,
  athleteIds: z
    .array(z.string().min(1))
    .length(6)
    .refine((ids) => new Set(ids).size === ids.length),
});
