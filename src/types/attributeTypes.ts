import type { AthleteIdKey, UserId } from "./athleteType";

export type RankKey = "S" | "A" | "B" | "C" | "D";

export type AttributeKey =
  | "strength"
  | "explosiveness"
  | "speed"
  | "endurance"
  | "cardio"
  | "grit"
  | "adaptability";

export type AttributeValues = Record<AttributeKey, number>;

export type AttributeSubmission = {
  athleteId: AthleteIdKey;
  createdAt: Date;
  user: { id: UserId; name: string };
  submissionId: string;
  favorite: boolean;
  values: AttributeValues;
  mvp?: boolean;
  comment?: string;
  ranking: RankKey | "";
};
