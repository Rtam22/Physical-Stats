import { initialAttributes } from "../data/athleteData";
import type {
  AthleteDataWithAttributes,
  AttributeKey,
  AttributeSubmission,
  AttributeValues,
} from "../types/athleteType";
import { roundToHalf } from "./mathUtils";

const KEYS: AttributeKey[] = [
  "strength",
  "explosiveness",
  "speed",
  "endurance",
  "cardio",
  "grit",
  "leadership",
];

function sumAttributes(
  athleteId: string,
  attributeSubmissions: AttributeSubmission[]
) {
  let totals: AttributeValues = {
    strength: 0,
    explosiveness: 0,
    speed: 0,
    endurance: 0,
    cardio: 0,
    grit: 0,
    leadership: 0,
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
  if (count === 0) return initialAttributes;
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

export function calculateAttributeTotal(athlete: AthleteDataWithAttributes) {
  let sum = 0;
  for (const key of Object.keys(
    athlete.attributes
  ) as (keyof AttributeValues)[]) {
    sum += athlete.attributes[key];
  }
  console.log(athlete);
  return sum;
}

export function getMVPCount(
  athleteId: string,
  attributeSubmissions: AttributeSubmission[]
) {
  let count = 0;
  for (const submission of attributeSubmissions) {
    if (submission.athleteId === athleteId) {
      if (submission.mvp) count++;
    }
  }
  return count;
}

export function checkIfMVP(
  currentAthlete: AthleteDataWithAttributes,
  athletes: AthleteDataWithAttributes[]
) {
  if (currentAthlete.mvpCount <= 0) return false;
  let mvp = true;
  const sameTeamAthletes = athletes.filter(
    (a) => a.info.team === currentAthlete.info.team
  );

  for (const a of sameTeamAthletes) {
    if (a.info.id === currentAthlete.info.id) continue;
    if (currentAthlete.mvpCount < a.mvpCount) {
      mvp = false;
    }
  }
  return mvp;
}
