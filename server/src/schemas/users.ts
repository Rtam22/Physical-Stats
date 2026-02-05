import { z } from "zod";

export const buildUserSchema = z.object({
  name: z.string(),
});

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
});
