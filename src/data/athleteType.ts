type AthleteId = string;
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

export type AthleteDataWithAttributes = AthleteData & {
  attributes: AttributeValues;
  favorites: number;
};

export type AttributeKey =
  | "strength"
  | "explosiveness"
  | "endurance"
  | "cardio"
  | "grit"
  | "leadership"
  | "adaptability";

export type AttributeValues = Record<AttributeKey, number>;

export type AttributeSubmission = {
  athleteId: AthleteId;
  id: UserId;
  username: string;
  favorite: boolean;
  values: AttributeValues;
};
