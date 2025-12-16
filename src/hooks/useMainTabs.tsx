import { useMemo, useState } from "react";
import AthleteGridSection from "../components/athletes/athleteGridSection";
import AthleteTeamBuilder from "../components/athletes/athleteTeamBuilder";
import TierListGrid from "../components/athletes/tierListGrid";
import Filters from "../components/filters/filters";
import TeamList from "../components/teams/teamList";
import type {
  AthleteDataWithAttributes,
  AthleteIdKey,
} from "../types/athleteType";
import type { FilterValue } from "../types/filterTypes";
import { allTabs, type TabID, type TabsConfig } from "../types/tabTypes";
import type { TeamType } from "../types/teamType";
import { filterAthletesBySubmitted } from "../utils/filterUtils";
import type { ModalType } from "../types/modalTypes";

type useTabsProps = {
  athletes: AthleteDataWithAttributes[];
  filters: {
    filters: FilterValue;
    setFilters: React.Dispatch<React.SetStateAction<FilterValue>>;
  };
  teams: {
    selectedTeam: TeamType | null;
    existingTeams: TeamType[];
    handleSetTeam: (athletes: AthleteDataWithAttributes[]) => void;
  };
  submittedVotes: AthleteIdKey[];
  openModal: (type: ModalType, athlete?: AthleteDataWithAttributes) => void;
};

function useMainTabs({
  athletes,
  filters,
  submittedVotes,
  teams,
  openModal,
}: useTabsProps) {
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

  const tabsConfig: TabsConfig[] = [
    {
      id: "teamBuilder",
      content: (
        <AthleteTeamBuilder
          athletes={athletes}
          handleSetTeam={teams.handleSetTeam}
        />
      ),
    },
    {
      id: "athletes",
      content: (
        <>
          <Filters
            filterValues={filters.filters}
            setFilter={(newFilters) =>
              filters.setFilters((prev) => ({ ...prev, ...newFilters }))
            }
          />
          <AthleteGridSection
            athletes={athletes}
            submittedVote={submittedVotes}
            onCardClick={openModal}
          />
        </>
      ),
    },
    {
      id: "tierList",
      content: (
        <>
          <TierListGrid
            athletes={filterAthletesBySubmitted(submittedVotes, athletes)}
            onCardClick={openModal}
          />
        </>
      ),
    },
    {
      id: "teams",
      content: (
        <>
          <TeamList
            teams={teams.existingTeams}
            selectedTeam={teams.selectedTeam}
          />
        </>
      ),
    },
  ];

  return {
    activeTab,
    tabsConfig,
    availableTabs,
    setActiveTab,
  };
}

export default useMainTabs;
