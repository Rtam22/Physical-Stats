import { useState } from "react";
import "./mainPage.css";
import type { AthleteIdKey, AttributeSubmission } from "../types/athleteType";
import Modal from "../components/layout/modal";
import type { ModalState, ModalType } from "../types/modalTypes";
import BackDrop from "../components/layout/backDrop";
import Filters from "../components/filters/filters";
import { filterAthletesBySubmitted } from "../utils/filterUtils";
import type { FilterValue } from "../types/filterTypes";
import SetAttributeForm from "../components/attributes/setAttributeForm";
import TierListGrid from "../components/athletes/tierListGrid";
import AthleteView from "../components/athletes/athleteView";
import { useAthletes } from "../hooks/useAthletes";
import { useSubmissions } from "../hooks/useSubmissions";
import type { TabID, TabsConfig } from "../components/layout/tabs";
import Tabs from "../components/layout/tabs";
import useAthleteFilters from "../hooks/useAthleteFilters";
import AthleteGridSection from "../components/athletes/athleteGridSection";
import NavigationTabs from "../components/navigation/navigationTabs";

function MainPage() {
  const [activeTab, setActiveTab] = useState<TabID>("athletes");
  const [modal, setModal] = useState<ModalState | null>(null);
  const { submissions, submittedVote, handleSubmitSubmissions } =
    useSubmissions();
  const [filters, setFilters] = useState<FilterValue>({
    sort: "none",
    team: "none",
    mvp: false,
    search: "",
  });
  const { athletes } = useAthletes({
    attributeSubmissions: submissions,
  });
  const { filteredAthletes } = useAthleteFilters({ filters, athletes });

  function handleSubmitVote(submission: AttributeSubmission) {
    handleSubmitSubmissions(submission);
    handleCloseModal();
  }

  function handleSetModal(athleteId: AthleteIdKey | null, type: ModalType) {
    const athlete = athletes.find((athlete) => athlete.info.id === athleteId);
    if (!athlete) {
      console.log("Error: cannot find athlete");
      return;
    }
    setModal({ type, athlete });
  }

  function handleCloseModal() {
    setModal(null);
  }

  const tabs: TabsConfig[] = [
    {
      id: "athletes",
      content: (
        <>
          <Filters
            filterValues={filters}
            setFilter={(newFilters) =>
              setFilters((prev) => ({ ...prev, ...newFilters }))
            }
          />
          <AthleteGridSection
            athletes={filteredAthletes}
            submittedVote={submittedVote}
            onCardClick={handleSetModal}
          />
        </>
      ),
    },
    {
      id: "tierList",
      content: (
        <>
          <TierListGrid
            athletes={filterAthletesBySubmitted(submittedVote, athletes)}
            onCardClick={handleSetModal}
          />
        </>
      ),
    },
  ];

  return (
    <div className="main-page">
      {modal && (
        <BackDrop onClose={handleCloseModal}>
          <Modal
            width="80%"
            height="90vh"
            type="middle"
            onClose={handleCloseModal}
          >
            {modal.type === "setAttributes" && (
              <SetAttributeForm
                athlete={modal.athlete}
                handleSubmit={handleSubmitVote}
              />
            )}

            {modal.type === "athleteView" && (
              <AthleteView submissions={submissions} athlete={modal.athlete} />
            )}
          </Modal>
        </BackDrop>
      )}
      <NavigationTabs active={activeTab} changeTab={(e) => setActiveTab(e)} />
      <Tabs activeTab={activeTab} tabs={tabs} />
    </div>
  );
}

export default MainPage;
