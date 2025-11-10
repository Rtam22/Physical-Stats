import { useState } from "react";
import Card from "../components/card";
import Grid from "../components/grid";
import { athletesTest } from "../data/athleteData";
import "./mainPage.css";
import type { AthleteData } from "../data/athleteType";

function MainPage() {
  const [athletes, setAthletes] = useState<AthleteData[]>(athletesTest);

  return (
    <div className="main-page">
      <Grid
        columns={3}
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
