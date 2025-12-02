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
import SetAttributeForm from "../components/athletes/setAttributeForm";
import TierListGrid from "../components/athletes/tierListGrid";
import AthleteView from "../components/athletes/athleteView";
import PaginationList from "../components/layout/paginationList";
import { useAthletes } from "../hooks/useAthletes";
import { useSubmissions } from "../hooks/useSubmissions";

type Tabs = "athletes" | "tierList";

function MainPage() {
  const [tab, setTab] = useState<Tabs>("athletes");
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

  function handleSubmitVote(submission: AttributeSubmission) {
    handleSubmitSubmissions(submission);
    handleCloseModal();
  }

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

  function handleSetModal(athleteId: AthleteIdKey | null, type: ModalType) {
    console.log(type);
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

  return (
    <div className="main-page">
      {modal && (
        <BackDrop onClose={handleCloseModal}>
          <Modal
            width="80%"
            height="auto"
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
                <PaginationList items={[]} title="Submission History" />
              </div>
            )}
          </Modal>
        </BackDrop>
      )}
      <div className="button-container">
        <button
          onClick={() => setTab("athletes")}
          className={`${tab === "athletes" ? "active" : ""}`}
        >
          Athletes
        </button>
        <button
          onClick={() => setTab("tierList")}
          className={`${tab === "tierList" ? "active" : ""}`}
        >
          TierList
        </button>
      </div>
      {tab === "tierList" && (
        <>
          <TierListGrid
            athletes={filterAthletesBySubmitted(submittedVote, athletes)}
            onCardClick={handleSetModal}
          />
        </>
      )}

      {tab === "athletes" && (
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
      )}
    </div>
  );
}

export default MainPage;
