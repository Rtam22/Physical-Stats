import { useState } from "react";
import "./mainPage.css";
import type {
  AthleteDataWithAttributes,
  AttributeSubmission,
} from "../types/athleteType";
import Modal from "../components/layout/modal";
import BackDrop from "../components/layout/backDrop";
import type { FilterValue } from "../types/filterTypes";
import SetAttributeForm from "../components/attributes/setAttributeForm";
import AthleteView from "../components/athletes/athleteView";
import { useAthletes } from "../hooks/useAthletes";
import { useSubmissions } from "../hooks/useSubmissions";
import Tabs from "../components/layout/tabs";
import useAthleteFilters from "../hooks/useAthleteFilters";
import NavigationTabs from "../components/navigation/navigationTabs";
import { useAthleteTeam } from "../hooks/useAthleteTeam";
import useModalController from "../hooks/useModalController";
import useMainTabs from "../hooks/useMainTabs";
import { initialFilters } from "../components/filters/filters";
import type { TabsConfig } from "../types/tabTypes";
import AthleteTeamBuilder from "../components/athletes/athleteTeamBuilder";
import TierListGrid from "../components/athletes/tierListGrid";
import TeamList from "../components/teams/teamList";
import { filterAthletesBySubmitted } from "../utils/filterUtils";
import AthletesTab from "../components/tabs/athletesTab";
import { useUser } from "../hooks/useUser";

function MainPage() {
  const submissions = useSubmissions();
  const [filters, setFilters] = useState<FilterValue>(initialFilters);
  const { athletes } = useAthletes({
    attributeSubmissions: submissions.submissions,
  });
  const { filteredAthletes } = useAthleteFilters({ filters, athletes });
  const { username, userId } = useUser();
  const team = useAthleteTeam({ athletes: athletes });
  const modal = useModalController();
  const tabs = useMainTabs({
    teams: {
      selectedTeam: team.selectedTeam,
      existingTeams: team.existingTeams,
      handleSetTeam,
    },
    hasUsername: Boolean(username),
  });

  function handleSubmitVote(submission: AttributeSubmission) {
    submissions.handleSubmitSubmissions(submission);
    modal.close();
  }

  function handleSetTeam(athletes: AthleteDataWithAttributes[]) {
    tabs.setActiveTab("teams");
    team.handleSetSelectedTeam(athletes, username);
  }
  const tabsConfig: TabsConfig[] = [
    {
      id: "teamBuilder",
      content: (
        <AthleteTeamBuilder athletes={athletes} handleSetTeam={handleSetTeam} />
      ),
    },
    {
      id: "athletes",
      content: (
        <AthletesTab
          filter={{ values: filters, setFilters }}
          athletes={filteredAthletes}
          submittedVote={submissions.submittedVoteAccess}
          onCardClick={modal.open}
        />
      ),
    },
    {
      id: "tierList",
      content: (
        <TierListGrid
          athletes={filterAthletesBySubmitted(
            submissions.submittedVoteAccess,
            athletes
          )}
          onCardClick={modal.open}
        />
      ),
    },
    {
      id: "teams",
      content: (
        <TeamList teams={team.existingTeams} selectedTeam={team.selectedTeam} />
      ),
    },
  ];

  return (
    <div className="main-page">
      {modal.state?.open && (
        <BackDrop onClose={modal.close}>
          <Modal width="80%" height="90vh" type="middle" onClose={modal.close}>
            {modal.state.type === "setAttributes" && modal.state.athlete && (
              <SetAttributeForm
                athlete={modal.state.athlete}
                handleSubmit={handleSubmitVote}
              />
            )}

            {modal.state.type === "athleteView" && modal.state.athlete && (
              <AthleteView
                submissions={submissions.submissions}
                athlete={modal.state.athlete}
              />
            )}
          </Modal>
        </BackDrop>
      )}
      {tabs.activeTab !== "username" && (
        <NavigationTabs
          active={tabs.activeTab}
          changeTab={(e) => tabs.setActiveTab(e)}
          allTabs={tabs.availableTabs}
        />
      )}

      <Tabs activeTab={tabs.activeTab} tabs={tabsConfig} />
    </div>
  );
}

export default MainPage;
