import { useEffect, useMemo, useState } from "react";
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
  const [activeTab, setActiveTab] = useState<TabID>("athletes");

  const availableTabs: TabID[] = useMemo(() => {
    return allTabs.filter((tab) => {
      const notDoneTeamBuilder =
        tab === "teamBuilder" && teams.selectedTeam !== null;
      const hasDoneTeamBuilder = tab === "teams" && teams.selectedTeam === null;
      const isUsername = tab === "username";
      if (notDoneTeamBuilder || hasDoneTeamBuilder || isUsername) {
        return;
      }
      return tab;
    });
  }, [teams.selectedTeam]);

  useEffect(() => {
    if (!hasUsername) {
      setActiveTab("username");
    }
  }, [hasUsername]);

  return {
    activeTab,
    availableTabs,
    setActiveTab,
  };
}

export default useMainTabs;
