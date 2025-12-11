import type { ReactNode } from "react";

export type TabID = "athletes" | "tierList" | "teamBuilder";

export type TabsConfig = {
  id: TabID;
  content: ReactNode;
};
