import type { ReactNode } from "react";

export type TabID =
  | "athletes"
  | "tierList"
  | "teamBuilder"
  | "username"
  | "teams";

export const allTabs: TabID[] = [
  "athletes",
  "tierList",
  "teamBuilder",
  "username",
  "teams",
];
export type TabsConfig = {
  id: TabID;
  content: ReactNode;
};
