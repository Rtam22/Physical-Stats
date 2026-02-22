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

type BaseTeam = {
  athletes: AthleteData[];
  averageAttributes: AttributeValues;
};

export type UserTeamType = BaseTeam & {
  user: UserType;
};

export type ExistingTeamType = BaseTeam & {
  team: AthleteTeams;
};

export type TeamType = UserTeamType | ExistingTeamType;

export type BuildTeamType = {
  id: string;
  user: UserType;
  athleteIds: AthleteIdKey[];
};

export type AllStarTeam = {
  users: UserType[];
  team: AthleteData[];
};
