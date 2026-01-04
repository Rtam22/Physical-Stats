import type { ReactNode } from "react";

export type TabID =
  | "athletes"
  | "tierList"
  | "teamBuilder"
  | "username"
  | "asiaTeams"
  | "allstarTeam";

export const allTabs: TabID[] = [
  "athletes",
  "tierList",
  "teamBuilder",
  "username",
  "asiaTeams",
  "allstarTeam",
];
export type TabsConfig = {
  id: TabID;
  content: ReactNode;
};
