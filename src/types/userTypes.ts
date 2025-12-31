import type { AthleteDataWithAttributes } from "./athleteType";

export type UserType = {
  id: string;
  name: string;
};

export type UserData = {
  athletes: AthleteDataWithAttributes[];
  user: UserType;
};

export type UserDataUpdate =
  | { type: "athletes"; value: AthleteDataWithAttributes[] }
  | { type: "user"; value: UserType };
