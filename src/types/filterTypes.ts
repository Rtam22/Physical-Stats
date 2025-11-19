import type { AthleteTeams, AttributeKey } from "./athleteType";

export type SortKey = AttributeKey | "favorite" | "total";

export type FilterValue = {
  sort: AttributeKey | "none" | "total" | "favorite";
  team: AthleteTeams | "none";
  mvp: boolean;
  search: string;
};
