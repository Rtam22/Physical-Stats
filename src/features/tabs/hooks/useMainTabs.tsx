import { useMemo, useState } from "react";
import type { AthleteDataWithAttributes } from "../../../types/athleteType";
import { allTabs, type TabID } from "../../../types/tabTypes";
import type { TeamType } from "../../../types/teamType";

type useTabsProps = {
  teams: {
    selectedTeam: TeamType | null;
    existingTeams: TeamType[];
    handleSetTeam: (athletes: AthleteDataWithAttributes[]) => void;
  };
  hasUsername: boolean;
};

function useMainTabs({ teams, hasUsername }: useTabsProps) {
  const [activeTab, setActiveTab] = useState<TabID>(
    hasUsername ? "athletes" : "username"
  );

  const availableTabs: TabID[] = useMemo(() => {
    return allTabs.filter((tab) => {
      const shouldHideTeamBuilder =
        tab === "teamBuilder" && teams.selectedTeam !== null;
      const shouldHideResultTabs =
        (tab === "teams" || tab === "allstarTeam") &&
        teams.selectedTeam === null;
      const isUsername = tab === "username";
      return !(isUsername || shouldHideTeamBuilder || shouldHideResultTabs);
    });
  }, [teams.selectedTeam]);

  return {
    activeTab,
    availableTabs,
    setActiveTab,
  };
}

export default useMainTabs;
