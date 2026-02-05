import { z } from "zod";

const valuesSchema = z.object({
  strength: z.number().min(1).max(10),
  explosiveness: z.number().min(1).max(10),
  speed: z.number().min(1).max(10),
  endurance: z.number().min(0).max(10),
  cardio: z.number().min(0).max(10),
  grit: z.number().min(0).max(10),
  adaptability: z.number().min(0).max(10),
});

export const createSubmissionSchema = z.object({
  athleteId: z.string(),
  favorite: z.boolean(),
  mvp: z.boolean().optional(),
  comment: z.string().max(500).optional(),
  ranking: z.string().optional(),

  values: valuesSchema,
});

export const submissionSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),

  user: z.object({
    id: z.string(),
    name: z.string(),
  }),

  athleteId: z.string(),
  favorite: z.boolean(),

  mvp: z.boolean().optional(),
  comment: z.string().max(500).optional(),
  ranking: z.string().optional(),

  values: valuesSchema,
});
