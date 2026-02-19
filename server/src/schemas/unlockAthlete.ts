import z from "zod";

export const createUnlockAthleteSchema = z.object({
  athleteIds: z
    .array(z.string().min(1))
    .min(1)
    .refine((ids) => new Set(ids).size === ids.length),
});
