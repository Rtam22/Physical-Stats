import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string(),
});

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
});
