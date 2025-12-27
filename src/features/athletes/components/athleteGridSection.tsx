import { useMemo } from "react";
import type {
  AthleteDataWithAttributes,
  AthleteIdKey,
} from "../../../types/athleteType";
import Card from "./athleteCard";
import Grid from "../../../shared/components/layout/grid";
import type { ModalOpenState } from "../../../types/modalTypes";

type AthleteGridSection = {
  athletes: AthleteDataWithAttributes[];
  onCardClick: (next: ModalOpenState) => void;
  submittedVote: AthleteIdKey[];
};

function AthleteGridSection({
  athletes,
  submittedVote,
  onCardClick,
}: AthleteGridSection) {
  const gridItems = useMemo(() => {
    return athletes.map((athlete) => (
      <Card
        id={athlete.info.id}
        athlete={athlete}
        attributes={athlete.attributes}
        favorites={athlete.favorite}
        mvp={athlete.mvp}
        total={athlete.total}
        handleClick={onCardClick}
        hasVoted={submittedVote.includes(athlete.info.id as AthleteIdKey)}
      />
    ));
  }, [athletes]);

  return (
    <Grid
      cellMinWidth="250px"
      cellMaxWidth="460px"
      width="80%"
      items={gridItems}
    />
  );
}

export default AthleteGridSection;
