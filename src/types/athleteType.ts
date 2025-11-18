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
    team: string;
    backgroundSport: string;
  };
};

export type AthleteTeams =
  | "korea"
  | "japan"
  | "turkey"
  | "mongolia"
  | "australia"
  | "philippines"
  | "indonesia";

export type AthleteDataWithAttributes = AthleteData & {
  attributes: AttributeValues;
  favorite: number;
  mvp: number;
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
};
