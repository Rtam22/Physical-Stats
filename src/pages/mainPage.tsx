import { useEffect, useState } from "react";
import Card from "../components/card";
import Grid from "../components/grid";
import { athleteList, attributeSubmissionsTest } from "../data/athleteData";
import "./mainPage.css";
import type { AthleteDataWithAttributes, AthleteId } from "../data/athleteType";
import {
  getAthleteAttributes,
  getFavoriteCount,
} from "../utils/attributeUtils";

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

  const [modal, setModal] = useState<AthleteId | null>(null);

  function handleModal(athleteId: AthleteId | null) {
    setModal(athleteId);
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
      <Grid
        cellMinWidth="250px"
        cellMaxWidth="460px"
        width="80%"
        items={[
          ...athletes.map((athlete) => (
            <Card
              id={athlete.info.name}
              athlete={athlete}
              attributes={athlete.attributes}
              favorites={athlete.favorites}
              handleOnClick={handleModal}
            />
          )),
        ]}
      />
    </div>
  );
}

export default MainPage;
