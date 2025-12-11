import type { TabID } from "../../types/tabTypes";
import { capitalize } from "../../utils/textUtils";

type NavigationTabsProps = {
  active: TabID;
  changeTab: (tab: TabID) => void;
  allTabs: TabID[];
};

function NavigationTabs({ active, changeTab, allTabs }: NavigationTabsProps) {
  return (
    <div className="button-container">
      {allTabs.map((tab) => {
        return (
          <button
            onClick={() => changeTab(tab)}
            className={`${active === tab ? "active" : ""}`}
          >
            {capitalize(tab)}
          </button>
        );
      })}
    </div>
  );
}

export default NavigationTabs;
