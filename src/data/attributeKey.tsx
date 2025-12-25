import type { AttributeKey, RankKey } from "../types/attributeTypes";

export const attributeKey: AttributeKey[] = [
  "strength",
  "explosiveness",
  "speed",
  "endurance",
  "cardio",
  "grit",
  "adaptability",
];

type RankKeyColor = { key: RankKey; color: string };
export const ranksKey: RankKeyColor[] = [
  { key: "S", color: "#FF807D" },
  { key: "A", color: "#FFBF7E" },
  { key: "B", color: "#FFE080" },
  { key: "C", color: "#FEFE7F" },
  { key: "D", color: "#BDFF7E" },
];
