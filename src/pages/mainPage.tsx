import { useEffect, useState } from "react";
import Card from "../components/card";
import Grid from "../components/grid";
import { athleteList, attributeSubmissionsTest } from "../data/athleteData";
import "./mainPage.css";
import type {
  AthleteDataWithAttributes,
  AttributeKey,
  AttributeSubmission,
  AttributeValues,
} from "../data/athleteType";
import { roundToHalf } from "../utils/math";

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

  const KEYS: AttributeKey[] = [
    "strength",
    "explosiveness",
    "endurance",
    "cardio",
    "grit",
    "leadership",
    "adaptability",
  ];

  function sumAttributes(
    athleteId: string,
    attributeSubmissions: AttributeSubmission[]
  ) {
    let totals: AttributeValues = {
      strength: 0,
      explosiveness: 0,
      endurance: 0,
      cardio: 0,
      grit: 0,
      leadership: 0,
      adaptability: 0,
    };
    let count = 0;

    for (const submission of attributeSubmissions) {
      if (submission.athleteId === athleteId) {
        for (const key of KEYS) {
          totals[key] += submission.values[key];
        }
        count++;
      }
    }

    return { totals: totals, count: count };
  }

  function averageAttributes(totals: AttributeValues, count: number) {
    let result: AttributeValues = { ...totals };
    for (const key of KEYS) {
      result[key] = roundToHalf(result[key] / count);
    }
    return result;
  }

  function getAthleteAttributes(
    athleteId: string,
    attributeSubmissions: AttributeSubmission[]
  ) {
    const sAttributes = sumAttributes(athleteId, attributeSubmissions);
    return averageAttributes(sAttributes.totals, sAttributes.count);
  }

  function getFavoriteCount(
    athleteId: string,
    attributeSubmissions: AttributeSubmission[]
  ) {
    let count = 0;
    for (const submission of attributeSubmissions) {
      if (submission.favorite === true && athleteId === submission.athleteId)
        count++;
    }
    return count;
  }

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
            />
          )),
        ]}
      />
    </div>
  );
}

export default MainPage;
