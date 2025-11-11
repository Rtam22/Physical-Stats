import { useState } from "react";
import Card from "../components/card";
import Grid from "../components/grid";
import { athleteList } from "../data/athleteData";
import "./mainPage.css";
import type { AthleteData } from "../data/athleteType";

function MainPage() {
  const [athletes, setAthletes] = useState<AthleteData[]>(athleteList);

  return (
    <div className="main-page">
      <Grid
        cellMinWidth="270px"
        cellMaxWidth="400px"
        width="80%"
        items={[
          ...athletes.map((athlete) => (
            <Card id={athlete.info.name} item={athlete} />
          )),
        ]}
      />
    </div>
  );
}

export default MainPage;
