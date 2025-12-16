import { useEffect, useState } from "react";
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

function MainPage() {
  const submissions = useSubmissions();
  const [filters, setFilters] = useState<FilterValue>(initialFilters);
  const { athletes } = useAthletes({
    attributeSubmissions: submissions.submissions,
  });
  const { filteredAthletes } = useAthleteFilters({ filters, athletes });
  const [username, setUsername] = useState<string>("eas");
  const team = useAthleteTeam({ athletes: athletes });
  const { modal, openModal, closeModal } = useModalController();
  const tabs = useMainTabs({
    athletes: filteredAthletes,
    filters: { filters, setFilters },
    submittedVotes: submissions.submittedVote,
    teams: {
      selectedTeam: team.selectedTeam,
      existingTeams: team.existingTeams,
      handleSetTeam,
    },
    openModal,
  });

  useEffect(() => {
    //if (!username) setActiveTab("username");
  }, []);

  function handleSubmitVote(submission: AttributeSubmission) {
    submissions.handleSubmitSubmissions(submission);
    console.log("dsa");
    closeModal();
  }

  function handleSetTeam(athletes: AthleteDataWithAttributes[]) {
    tabs.setActiveTab("teams");
    team.handleSetSelectedTeam(athletes, username);
  }

  return (
    <div className="main-page">
      {modal?.open && (
        <BackDrop onClose={closeModal}>
          <Modal width="80%" height="90vh" type="middle" onClose={closeModal}>
            {modal.type === "setAttributes" && modal.athlete && (
              <SetAttributeForm
                athlete={modal.athlete}
                handleSubmit={handleSubmitVote}
              />
            )}

            {modal.type === "athleteView" && modal.athlete && (
              <AthleteView
                submissions={submissions.submissions}
                athlete={modal.athlete}
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

      <Tabs activeTab={tabs.activeTab} tabs={tabs.tabsConfig} />
    </div>
  );
}

export default MainPage;
