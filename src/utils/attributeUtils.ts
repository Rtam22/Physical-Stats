import type {
  AttributeKey,
  AttributeSubmission,
  AttributeValues,
} from "../data/athleteType";
import { roundToHalf } from "./mathUtils";

const KEYS: AttributeKey[] = [
  "strength",
  "explosiveness",
  "endurance",
  "cardio",
  "grit",
  "leadership",
  "adaptability",
];

function sumAttributes(
  athleteId: string,
  attributeSubmissions: AttributeSubmission[]
) {
  let totals: AttributeValues = {
    strength: 0,
    explosiveness: 0,
    endurance: 0,
    cardio: 0,
    grit: 0,
    leadership: 0,
    adaptability: 0,
  };
  let count = 0;

  for (const submission of attributeSubmissions) {
    if (submission.athleteId === athleteId) {
      for (const key of KEYS) {
        totals[key] += submission.values[key];
      }
      count++;
    }
  }

  return { totals: totals, count: count };
}

function averageAttributes(totals: AttributeValues, count: number) {
  let result: AttributeValues = { ...totals };
  for (const key of KEYS) {
    result[key] = roundToHalf(result[key] / count);
  }
  return result;
}

export function getAthleteAttributes(
  athleteId: string,
  attributeSubmissions: AttributeSubmission[]
) {
  const sAttributes = sumAttributes(athleteId, attributeSubmissions);
  return averageAttributes(sAttributes.totals, sAttributes.count);
}

export function getFavoriteCount(
  athleteId: string,
  attributeSubmissions: AttributeSubmission[]
) {
  let count = 0;
  for (const submission of attributeSubmissions) {
    if (submission.favorite === true && athleteId === submission.athleteId)
      count++;
  }
  return count;
}
