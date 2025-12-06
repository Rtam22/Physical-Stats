import { useMemo, useState } from "react";
import Card from "../components/athletes/card";
import Grid from "../components/layout/grid";
import "./mainPage.css";
import type { AthleteIdKey, AttributeSubmission } from "../types/athleteType";
import Modal from "../components/layout/modal";
import type { ModalState, ModalType } from "../types/modalTypes";
import BackDrop from "../components/layout/backDrop";
import Filters from "../components/filters/filters";
import { applyFilters, filterAthletesBySubmitted } from "../utils/filterUtils";
import type { FilterValue } from "../types/filterTypes";
import SetAttributeForm from "../components/athletes/attributes/setAttributeForm";
import TierListGrid from "../components/athletes/tierListGrid";
import AthleteView from "../components/athletes/athleteView";
import PaginationList from "../components/layout/paginationList";
import { useAthletes } from "../hooks/useAthletes";
import { useSubmissions } from "../hooks/useSubmissions";
import type { TabID, TabsConfig } from "../components/layout/tabs";
import Tabs from "../components/layout/tabs";
import SubmissionCard from "../components/athletes/submissionCard";

function MainPage() {
  const [activeTab, setActiveTab] = useState<TabID>("athletes");
  const { submissions, submittedVote, handleSubmitSubmissions } =
    useSubmissions();
  const { athletes } = useAthletes({
    attributeSubmissions: submissions,
  });
  const [modal, setModal] = useState<ModalState | null>(null);
  const [filters, setFilters] = useState<FilterValue>({
    sort: "none",
    team: "none",
    mvp: false,
    search: "",
  });

  const filteredAthletes = useMemo(() => {
    return applyFilters(athletes, filters);
  }, [filters, athletes]);

  const gridItems = useMemo(() => {
    return filteredAthletes.map((athlete) => (
      <Card
        id={athlete.info.id}
        athlete={athlete}
        attributes={athlete.attributes}
        favorites={athlete.favorite}
        mvp={athlete.mvp}
        total={athlete.total}
        handleClick={handleSetModal}
        hasVoted={submittedVote.includes(athlete.info.id as AthleteIdKey)}
      />
    ));
  }, [filteredAthletes]);

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
          <Grid
            cellMinWidth="250px"
            cellMaxWidth="460px"
            width="80%"
            items={gridItems}
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
              <div className="container">
                <AthleteView athlete={modal.athlete} />
                <PaginationList
                  items={[
                    ...submissions
                      .filter(
                        (submission) =>
                          submission.athleteId === modal.athlete.info.id
                      )
                      .map((submission) => {
                        return <SubmissionCard submission={submission} />;
                      }),
                  ]}
                  title="Submission History"
                  itemsAmountOnPage={3}
                />
              </div>
            )}
          </Modal>
        </BackDrop>
      )}
      <div className="button-container">
        <button
          onClick={() => setActiveTab("athletes")}
          className={`${activeTab === "athletes" ? "active" : ""}`}
        >
          Athletes
        </button>
        <button
          onClick={() => setActiveTab("tierList")}
          className={`${activeTab === "tierList" ? "active" : ""}`}
        >
          TierList
        </button>
      </div>
      <Tabs activeTab={activeTab} tabs={tabs} />
    </div>
  );
}

export default MainPage;
