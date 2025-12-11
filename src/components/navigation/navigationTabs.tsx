import type { TabID } from "../../types/tabTypes";

type NavigationTabsProps = {
  active: TabID;
  changeTab: (tab: TabID) => void;
};

function NavigationTabs({ active, changeTab }: NavigationTabsProps) {
  return (
    <div className="button-container">
      <button
        onClick={() => changeTab("teamBuilder")}
        className={`${active === "teamBuilder" ? "active" : ""}`}
      >
        Team Builder
      </button>
      <button
        onClick={() => changeTab("athletes")}
        className={`${active === "athletes" ? "active" : ""}`}
      >
        Athletes
      </button>
      <button
        onClick={() => changeTab("tierList")}
        className={`${active === "tierList" ? "active" : ""}`}
      >
        TierList
      </button>
    </div>
  );
}

export default NavigationTabs;
