import type { AthleteTeams, CountryCode } from "../types/teamType";

export const COUNTRY_CODE_MAP: Record<AthleteTeams, CountryCode> = {
  "South Korea": "KR",
  Japan: "JP",
  Turkey: "TR",
  Mongolia: "MN",
  Australia: "AU",
  Philippines: "PH",
  Indonesia: "ID",
  Thailand: "TH",
};

export function getCountryCode(country: AthleteTeams): CountryCode | undefined {
  return COUNTRY_CODE_MAP[country];
}
