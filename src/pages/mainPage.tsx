import { useEffect, useMemo, useState } from "react";
import Card from "../components/card";
import Grid from "../components/grid";
import {
  athleteList,
  attributeSubmissionsTest,
  initialAttributes,
} from "../data/athleteData";
import "./mainPage.css";
import type {
  AthleteDataWithAttributes,
  AthleteIdKey,
  AttributeSubmission,
} from "../types/athleteType";
import {
  getAttributesFromSubmissions,
  getValuesForAttributes,
} from "../utils/attributeUtils";
import Modal from "../components/modal";
import type { ModalState, ModalType } from "../types/modalTypes";
import BackDrop from "../components/backdrop";
import Filters from "../components/filters";
import { applyFilters, filterAthletesBySubmitted } from "../utils/filterUtils";
import type { FilterValue } from "../types/filterTypes";
import SetAttributeForm from "../components/setAttributeForm";
import TierListGrid from "../components/tierListGrid";

type Tabs = "athletes" | "tierList";

function MainPage() {
  const [tab, setTab] = useState<Tabs>("athletes");
  const [athletes, setAthletes] = useState<AthleteDataWithAttributes[]>(() =>
    athleteList.map((a) => ({
      ...a,
      attributes: initialAttributes,
      favorite: 0,
      mvp: false,
      total: 0,
      mvpCount: 0,
      ranking: null,
    }))
  );

  const [attributeSubmissions, setAttributeSubmissions] = useState<
    AttributeSubmission[]
  >(attributeSubmissionsTest);
  const [submittedVote, setSubmittedVote] = useState<AthleteIdKey[]>([
    "kim-dong-hyun",
    "kim-min-jae",
  ]);
  const [modal, setModal] = useState<ModalState | null>(null);
  const [filters, setFilters] = useState<FilterValue>({
    sort: "none",
    team: "none",
    mvp: false,
    search: "",
  });

  function handleSubmitVote(submission: AttributeSubmission) {
    setSubmittedVote([...submittedVote, submission.athleteId]);
    setAttributeSubmissions((prev) => [...prev, submission]);
    handleCloseModal();
  }

  const filteredAthletes = useMemo(() => {
    return applyFilters(athletes, filters);
  }, [filters, athletes]);

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

  useEffect(() => {
    const updatedAthletes = getAttributesFromSubmissions(
      attributeSubmissions,
      athletes
    );
    const finalAthletes = getValuesForAttributes(updatedAthletes);
    setAthletes(finalAthletes);
  }, [attributeSubmissions]);

  return (
    <div className="main-page">
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
          {modal && (
            <BackDrop onClose={handleCloseModal}>
              <Modal
                width="90%"
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
              </Modal>
            </BackDrop>
          )}
          <Grid
            cellMinWidth="250px"
            cellMaxWidth="460px"
            width="80%"
            items={[
              ...filteredAthletes.map((athlete) => (
                <Card
                  id={athlete.info.id}
                  athlete={athlete}
                  attributes={athlete.attributes}
                  favorites={athlete.favorite}
                  size="small"
                  mvp={athlete.mvp}
                  total={athlete.total}
                  handleClick={handleSetModal}
                  hasVoted={submittedVote.includes(
                    athlete.info.id as AthleteIdKey
                  )}
                />
              )),
            ]}
          />
        </>
      )}
    </div>
  );
}

export default MainPage;
