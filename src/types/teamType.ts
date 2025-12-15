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

type baseTeam = {
  athletes: AthleteDataWithAttributes[];
  avgAttributes: AttributeValues;
};

type UserTeamType = baseTeam & {
  user: string;
};

type ExistingTeamType = baseTeam & {
  team: AthleteTeams;
};

export type TeamType = UserTeamType | ExistingTeamType;
