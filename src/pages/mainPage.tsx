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
import { type TabID } from "../types/tabTypes";
import { useAthleteTeam } from "../hooks/useAthleteTeam";
import useModalController from "../hooks/useModalController";
import useTabs from "../hooks/useTabs";
import { initialFilters } from "../components/filters/filters";

function MainPage() {
  const [activeTab, setActiveTab] = useState<TabID>("athletes");
  const submissions = useSubmissions();
  const [filters, setFilters] = useState<FilterValue>(initialFilters);
  const { athletes } = useAthletes({
    attributeSubmissions: submissions.submissions,
  });
  const { filteredAthletes } = useAthleteFilters({ filters, athletes });
  const [username, setUsername] = useState<string>("eas");
  const team = useAthleteTeam({ athletes: athletes });
  const { modal, openModal, closeModal } = useModalController();
  const tabs = useTabs({
    athletes: filteredAthletes,
    filters: { filters, setFilters },
    submittedVotes: submissions.submittedVote,
    teams: {
      selectedTeam: team.selectedTeam,
      existingTeams: team.existingTeams,
    },
    openModal,
    handleSetTeam,
  });

  useEffect(() => {
    //if (!username) setActiveTab("username");
  }, []);

  function handleSubmitVote(submission: AttributeSubmission) {
    submissions.handleSubmitSubmissions(submission);
    closeModal;
  }

  function handleSetTeam(athletes: AthleteDataWithAttributes[]) {
    setActiveTab("teams");
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
      {activeTab !== "username" && (
        <NavigationTabs
          active={activeTab}
          changeTab={(e) => setActiveTab(e)}
          allTabs={tabs.availableTabs}
        />
      )}

      <Tabs activeTab={activeTab} tabs={tabs.tabsConfig} />
    </div>
  );
}

export default MainPage;
