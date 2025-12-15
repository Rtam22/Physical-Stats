import { initialAttributes } from "../data/athleteData";
import type {
  AthleteDataWithAttributes,
  AttributeKey,
  AttributeSubmission,
  AttributeValues,
  RankKey,
} from "../types/athleteType";
import type { AthleteTeams } from "../types/teamType";
import { roundToHalf } from "./mathUtils";

const KEYS: AttributeKey[] = [
  "strength",
  "explosiveness",
  "speed",
  "endurance",
  "cardio",
  "grit",
  "adaptability",
];

function sumAttributesByAthlete(
  athleteId: string,
  attributeSubmissions: AttributeSubmission[]
) {
  const filtered = attributeSubmissions
    .filter((athlete) => athlete.athleteId === athleteId)
    .map((a) => a.values);

  return { totals: sumAttributeValues(filtered), count: filtered.length };
}

function sumAttributesByTeam(
  athletes: AthleteDataWithAttributes[],
  team: AthleteTeams
) {
  const values: AttributeValues[] = athletes
    .filter((athlete) => athlete.info.team === team)
    .map((athlete) => athlete.attributes);
  return { totals: sumAttributeValues(values), count: values.length };
}

export function sumAttributeValues(attributes: AttributeValues[]) {
  let totals: AttributeValues = {
    strength: 0,
    explosiveness: 0,
    speed: 0,
    endurance: 0,
    cardio: 0,
    grit: 0,
    adaptability: 0,
  };

  for (const values of attributes) {
    for (const key of KEYS) {
      totals[key] += values[key];
    }
  }
  return totals;
}

function averageAttributes(totals: AttributeValues, count: number) {
  if (count === 0) return initialAttributes;
  let result: AttributeValues = { ...totals };
  for (const key of KEYS) {
    result[key] = roundToHalf(result[key] / count);
  }
  return result;
}

function getHighest(count: Record<RankKey, number>): RankKey | null {
  let highestKey: RankKey | null = "S";
  let highestValue = -Infinity;

  for (const key of Object.keys(count) as RankKey[]) {
    if (count[key] > highestValue) {
      highestValue = count[key];
      highestKey = key;
    }
  }
  if (Object.values(count).every((v) => v === 0)) {
    return null;
  }

  return highestKey;
}

function getRankingFromSubmission(
  submissions: AttributeSubmission[],
  athlete: AthleteDataWithAttributes
) {
  let count: Record<RankKey, number> = {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  };
  for (const submission of submissions) {
    if (submission.ranking && athlete.info.id === submission.athleteId)
      count[submission.ranking]++;
  }

  return getHighest(count);
}

export function getTeamAttributes(
  athletes: AthleteDataWithAttributes[],
  team: AthleteTeams
) {
  const teamAttributes = sumAttributesByTeam(athletes, team);

  return averageAttributes(teamAttributes.totals, teamAttributes.count);
}

export function getAthleteAttributes(
  athleteId: string,
  attributeSubmissions: AttributeSubmission[]
) {
  const sAttributes = sumAttributesByAthlete(athleteId, attributeSubmissions);
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

export function getAttributesFromSubmissions(
  submissions: AttributeSubmission[],
  athletes: AthleteDataWithAttributes[]
) {
  return athletes.map((athlete) => {
    const attributes = getAthleteAttributes(athlete.info.id, submissions);
    const favorite = getFavoriteCount(athlete.info.id, submissions);
    const mvpCount = getMVPCount(athlete.info.id, submissions);
    const ranking = getRankingFromSubmission(submissions, athlete);
    return {
      ...athlete,
      attributes: attributes,
      favorite: favorite,
      mvpCount: mvpCount,
      ranking: ranking,
    };
  });
}

export function getValuesForAttributes(athletes: AthleteDataWithAttributes[]) {
  return athletes.map((athlete) => {
    const mvp = checkIfMVP(athlete, athletes);
    const total = calculateAttributeTotal(athlete);
    return { ...athlete, mvp: mvp, total: total };
  });
}
