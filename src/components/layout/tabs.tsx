import type { ReactNode } from "react";
import "./tabs.css";

export type TabID = "athletes" | "tierList";

export type TabsConfig = {
  id: TabID;
  content: ReactNode;
};

type TabsProps = {
  activeTab: TabID;
  tabs: TabsConfig[];
};

function Tabs({ activeTab, tabs }: TabsProps) {
  const active = tabs.find((tab) => tab.id === activeTab);
  return <div className="tabs">{active?.content}</div>;
}

export default Tabs;
