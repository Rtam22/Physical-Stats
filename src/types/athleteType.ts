export type AthleteId = string;
type UserId = string;

export type AthleteData = {
  info: {
    id: AthleteId;
    img: string;
    name: string;
    age: number;
    height: string;
    weight: string;
    team: AthleteTeams;
    backgroundSport: string;
  };
};

export type AthleteTeams =
  | "South Korea"
  | "Japan"
  | "Turkey"
  | "Mongolia"
  | "Australia"
  | "Philippines"
  | "Indonesia"
  | "Thailand";

export type AthleteDataWithAttributes = AthleteData & {
  attributes: AttributeValues;
  favorite: number;
  mvp: boolean;
  mvpCount: number;
  total: number;
};

export type AttributeKey =
  | "strength"
  | "explosiveness"
  | "speed"
  | "endurance"
  | "cardio"
  | "grit"
  | "leadership";

export type AttributeValues = Record<AttributeKey, number>;

export type AttributeSubmission = {
  athleteId: AthleteId;
  id: UserId;
  username: string;
  favorite: boolean;
  values: AttributeValues;
  mvp?: boolean;
};
