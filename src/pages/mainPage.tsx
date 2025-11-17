import { useEffect, useState } from "react";
import Card from "../components/card";
import Grid from "../components/grid";
import { athleteList, attributeSubmissionsTest } from "../data/athleteData";
import "./mainPage.css";
import type {
  AthleteDataWithAttributes,
  AthleteId,
} from "../types/athleteType";
import {
  getAthleteAttributes,
  getFavoriteCount,
} from "../utils/attributeUtils";
import Modal from "../components/modal";
import type { ModalState, ModalType } from "../types/modalTypes";
import BackDrop from "../components/backdrop";

function MainPage() {
  const [athletes, setAthletes] = useState<AthleteDataWithAttributes[]>(() =>
    athleteList.map((a) => ({
      ...a,
      attributes: {
        strength: 0,
        explosiveness: 0,
        endurance: 0,
        cardio: 0,
        grit: 0,
        leadership: 0,
        adaptability: 0,
      },
      favorites: 0,
    }))
  );
  const [modal, setModal] = useState<ModalState | null>(null);

  function handleSetModal(athleteId: AthleteId | null, type: ModalType) {
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
    setAthletes((prev) => {
      return prev.map((athlete) => {
        const attributes = getAthleteAttributes(
          athlete.info.id,
          attributeSubmissionsTest
        );
        const favorites = getFavoriteCount(
          athlete.info.id,
          attributeSubmissionsTest
        );
        return { ...athlete, attributes: attributes, favorites: favorites };
      });
    });
  }, []);

  return (
    <div className="main-page">
      {modal && (
        <BackDrop onClose={handleCloseModal}>
          <Modal type="middle" onClose={handleCloseModal}>
            <div>dsadsa</div>
          </Modal>
        </BackDrop>
      )}
      <Grid
        cellMinWidth="250px"
        cellMaxWidth="460px"
        width="80%"
        items={[
          ...athletes.map((athlete) => (
            <Card
              id={athlete.info.id}
              athlete={athlete}
              attributes={athlete.attributes}
              favorites={athlete.favorites}
              size="small"
              handleClick={handleSetModal}
            />
          )),
        ]}
      />
    </div>
  );
}

export default MainPage;
