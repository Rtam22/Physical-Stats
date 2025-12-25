import { useState } from "react";
import "./mainPage.css";
import type { AthleteDataWithAttributes } from "../types/athleteType";
import Modal from "../shared/components/layout/modal";
import BackDrop from "../shared/components/layout/backDrop";
import type { FilterValue } from "../types/filterTypes";
import SetAttributeForm from "../features/attributes/components/setAttributeForm";
import AthleteView from "../features/athletes/components/athleteView";
import { useAthletes } from "../features/athletes/hooks/useAthletes";
import { useSubmissions } from "../features/submissions/hooks/useSubmissions";
import Tabs from "../shared/components/layout/tabs";
import useAthleteFilters from "../features/athletes/hooks/useAthleteFilters";
import NavigationTabs from "../shared/components/navigation/navigationTabs";
import { useAthleteTeam } from "../features/teams/hooks/useAthleteTeam";
import useModalController from "../shared/hooks/useModalController";
import useMainTabs from "../features/mainPage/hooks/useMainTabs";
import { initialFilters } from "../shared/components/filters/filters";
import type { TabsConfig } from "../types/tabTypes";
import AthleteTeamBuilder from "../features/teams/components/athleteTeamBuilder";
import TierListGrid from "../shared/components/layout/tierListGrid";
import TeamList from "../features/teams/components/teamList";
import { filterAthletesBySubmitted } from "../utils/filterUtils";
import AthletesTab from "../features/mainPage/components/athletesTab";
import { useUser } from "../features/user/hooks/useUser";
import type { UserType } from "../types/userTypes";
import SignupTab from "../features/mainPage/components/signupTab";
import type { AttributeSubmission } from "../types/attributeTypes";

function MainPage() {
  const submissions = useSubmissions();
  const [filters, setFilters] = useState<FilterValue>(initialFilters);
  const { athletes } = useAthletes({
    attributeSubmissions: submissions.submissions,
  });
  const { filteredAthletes } = useAthleteFilters({ filters, athletes });
  const { user, submitUser } = useUser();
  const team = useAthleteTeam({ athletes: athletes });
  const modal = useModalController();
  const tabs = useMainTabs({
    teams: {
      selectedTeam: team.selectedTeamView,
      existingTeams: team.existingTeams,
      handleSetTeam,
    },
    hasUsername: Boolean(user.username),
  });
  const isOnUsernameStep = tabs.activeTab === "username";

  function handleSubmitVote(submission: AttributeSubmission) {
    submissions.handleSubmitSubmissions(submission);
    modal.close();
  }

  function handleSubmiteUser(user: UserType) {
    tabs.setActiveTab("athletes");
    submitUser(user);
  }

  function handleSetTeam(athletes: AthleteDataWithAttributes[]) {
    const athletesId = athletes.map((athlete) => athlete.info.id);
    tabs.setActiveTab("teams");
    team.handleSetSelectedTeam(athletesId, user.username);
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
        <TeamList
          teams={team.existingTeams}
          selectedTeam={team.selectedTeamView}
        />
      ),
    },
    {
      id: "username",
      content: <SignupTab submitUser={handleSubmiteUser} />,
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
      {!isOnUsernameStep && (
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
