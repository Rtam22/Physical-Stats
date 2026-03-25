import { motion } from "framer-motion";
import type { TabID } from "../../../types/tabTypes";
import "./navigationTabs.css";

type NavigationTabsProps = {
  active: TabID;
  changeTab: (tab: TabID) => void;
  allTabs: TabID[];
  initialized: boolean;
};

export const TAB_LABELS: Record<TabID, string> = {
  athletes: "Athletes",
  tierList: "Tier List",
  teamBuilder: "Team Builder",
  username: "Username",
  asiaTeams: "Asia Teams",
  allstarTeam: "All-star Teams",
};

function NavigationTabs({
  active,
  changeTab,
  allTabs,
  initialized,
}: NavigationTabsProps) {
  const isOnUsernameStep = active === "username";

  if (isOnUsernameStep) return null;

  return (
    <div className="navigation-container">
      {allTabs.map((tab, index) => {
        return (
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            layout
            key={TAB_LABELS[tab]}
            disabled={!initialized}
            onClick={() => changeTab(tab)}
            className={`navigation-tab ${active === tab ? "active" : ""} ${!initialized ? "loading" : ""}`}
          >
            {TAB_LABELS[tab]}
          </motion.button>
        );
      })}
    </div>
  );
}

export default NavigationTabs;
