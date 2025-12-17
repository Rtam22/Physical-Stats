import "./tabs.css";
import type { TabID, TabsConfig } from "../../../types/tabTypes";

type TabsProps = {
  activeTab: TabID;
  tabs: TabsConfig[];
};

function Tabs({ activeTab, tabs }: TabsProps) {
  const active = tabs.find((tab) => tab.id === activeTab);
  return <div className="tabs">{active?.content}</div>;
}

export default Tabs;
