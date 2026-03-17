import Loader from "../../../shared/components/ui/loader";
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

  if (!initialized)
    return (
      <div className="navigation-loader">
        {<Loader type="dots" size={50} />}
      </div>
    );

  return (
    <div className="navigation-container">
      {allTabs.map((tab, index) => {
        return (
          <button
            key={index}
            onClick={() => changeTab(tab)}
            className={`${active === tab ? "active" : ""}`}
          >
            {TAB_LABELS[tab]}
          </button>
        );
      })}
    </div>
  );
}

export default NavigationTabs;
