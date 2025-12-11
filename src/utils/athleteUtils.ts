import type { AthleteDataWithAttributes } from "../types/athleteType";

export function genderCounter(array: AthleteDataWithAttributes[]) {
  let maleCount = 0;
  let femaleCount = 0;
  for (const athlete of array) {
    if (athlete.info.gender === "male") {
      maleCount++;
    } else {
      femaleCount++;
    }
  }

  return { male: maleCount, female: femaleCount };
}
