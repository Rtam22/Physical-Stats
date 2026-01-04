import type { AthleteData, AthleteIdKey } from "./athleteType";
import type { AttributeValues } from "./attributeTypes";
import type { UserType } from "./userTypes";

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
  // athletes: AthleteDataWithAttributes[];
  athletes: AthleteData[];
  averageAttributes: AttributeValues;
};

export type UserTeamType = baseTeam & {
  user: UserType;
};

export type ExistingTeamType = baseTeam & {
  team: AthleteTeams;
};

export type TeamType = UserTeamType | ExistingTeamType;

export type BuildTeamType = {
  id: string;
  user: UserType;
  athletes: AthleteIdKey[];
};

export type AllStarTeam = {
  users: UserType[];
  team: AthleteData[];
};
