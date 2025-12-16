import type { AthleteDataWithAttributes, AttributeValues } from "./athleteType";

export type AthleteTeams =
  | "South Korea"
  | "Japan"
  | "Turkey"
  | "Mongolia"
  | "Australia"
  | "Philippines"
  | "Indonesia"
  | "Thailand";

export type CountryCode = "KR" | "TR" | "MN" | "AU" | "PH" | "ID" | "TH" | "JP";

type baseTeam = {
  athletes: AthleteDataWithAttributes[];
  averageAttributes: AttributeValues;
};

type UserTeamType = baseTeam & {
  user: string;
};

type ExistingTeamType = baseTeam & {
  team: AthleteTeams;
};

export type TeamType = UserTeamType | ExistingTeamType;
