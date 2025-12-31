import "./TabController.css";
import type { TabID, TabsConfig } from "../../../types/tabTypes";

type TabControllerProps = {
  activeTab: TabID;
  tabs: TabsConfig[];
};

function TabController({ activeTab, tabs }: TabControllerProps) {
  const active = tabs.find((tab) => tab.id === activeTab);
  return <div className="tabs">{active?.content}</div>;
}

export default TabController;
