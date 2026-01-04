import type { TabID } from "../../../types/tabTypes";

type NavigationTabsProps = {
  active: TabID;
  changeTab: (tab: TabID) => void;
  allTabs: TabID[];
};

export const TAB_LABELS: Record<TabID, string> = {
  athletes: "Athletes",
  tierList: "Tier List",
  teamBuilder: "Team Builder",
  username: "Username",
  asiaTeams: "Asia Teams",
  allstarTeam: "All-star Teams",
};

function NavigationTabs({ active, changeTab, allTabs }: NavigationTabsProps) {
  const isOnUsernameStep = active === "username";

  if (isOnUsernameStep) return null;
  return (
    <div className="button-container">
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
