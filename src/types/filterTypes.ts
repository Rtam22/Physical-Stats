import type { AttributeKey } from "./athleteType";
import type { AthleteTeams } from "./teamType";

export type SortKey = AttributeKey | "favorite" | "total";

export type FilterValue = {
  sort: AttributeKey | "none" | "total" | "favorite";
  team: AthleteTeams | "none";
  mvp: boolean;
  search: string;
};
