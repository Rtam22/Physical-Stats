import { useEffect, useState } from "react";
import type {
  AthleteDataWithAttributes,
  AttributeSubmission,
} from "../../../types/athleteType";
import { athleteService } from "../services/athleteService";

type UseAthleteProps = {
  attributeSubmissions: AttributeSubmission[];
};

export function useAthletes({ attributeSubmissions }: UseAthleteProps) {
  const [athletes, setAthletes] = useState<AthleteDataWithAttributes[]>(() =>
    athleteService.buildAthletes(attributeSubmissions)
  );

  useEffect(() => {
    setAthletes(athleteService.buildAthletes(attributeSubmissions));
  }, [attributeSubmissions]);

  return { athletes };
}
