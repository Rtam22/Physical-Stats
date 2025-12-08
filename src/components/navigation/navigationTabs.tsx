import type { TabID } from "../layout/tabs";

type NavigationTabsProps = {
  active: TabID;
  changeTab: (tab: TabID) => void;
};

function NavigationTabs({ active, changeTab }: NavigationTabsProps) {
  return (
    <div className="button-container">
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
