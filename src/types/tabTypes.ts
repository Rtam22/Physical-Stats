import type { ReactNode } from "react";

export type TabID =
  | "athletes"
  | "tierList"
  | "teamBuilder"
  | "username"
  | "teams"
  | "allstarTeam";

export const allTabs: TabID[] = [
  "athletes",
  "tierList",
  "teamBuilder",
  "username",
  "teams",
  "allstarTeam",
];
export type TabsConfig = {
  id: TabID;
  content: ReactNode;
};
