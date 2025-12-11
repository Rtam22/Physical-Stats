import { useMemo, useState } from "react";
import type { AthleteDataWithAttributes } from "../types/athleteType";
import type { FilterValue } from "../types/filterTypes";
import { genderCounter } from "../utils/athleteUtils";
import {
  applyFilters,
  baseFilters,
  filterByFemale,
  filterByMale,
} from "../utils/filterUtils";

type useTeamBuilderProps = {
  athletes: AthleteDataWithAttributes[];
};

type TeamCounter = {
  male: number;
  female: number;
};

function useTeamBuilder({ athletes }: useTeamBuilderProps) {
  const teamSize: TeamCounter = { male: 4, female: 2 };
  const [selectedAthletes, setSelectedAthletes] = useState<
    AthleteDataWithAttributes[]
  >([]);
  const [filters, setFilters] = useState<FilterValue>(baseFilters);
  const teamCounter: TeamCounter = useMemo(() => {
    return genderCounter(selectedAthletes);
  }, [selectedAthletes]);
  const currentGenderSelection: "male" | "female" = useMemo(() => {
    if (teamCounter.male < teamSize.male) {
      return "male";
    }
    return "female";
  }, [teamCounter]);
  const availableAthletes: AthleteDataWithAttributes[] = useMemo(() => {
    const searchFiltered = applyFilters(athletes, filters);
    const genderFiltered = generateAvailableAthletes(searchFiltered) ?? [];
    return genderFiltered;
  }, [selectedAthletes, filters]);
  const maleSelected = filterByMale(selectedAthletes);
  const femaleSelected = filterByFemale(selectedAthletes);

  function generateAvailableAthletes(athletes: AthleteDataWithAttributes[]) {
    if (currentGenderSelection === "male") {
      return filterByMale(athletes);
    }
    return filterByFemale(athletes);
  }

  function addAthlete(athlete: AthleteDataWithAttributes) {
    const teamIsFull =
      teamCounter.male === teamSize.male &&
      teamCounter.female === teamSize.female;

    if (teamIsFull) {
      return;
    } else {
      setSelectedAthletes((prev) => [...prev, athlete]);
    }
  }

  function removeAthlete(athlete: AthleteDataWithAttributes) {
    setSelectedAthletes((prev) =>
      prev.filter((a) => a.info.id !== athlete.info.id)
    );
  }
  return {
    availableAthletes,
    maleSelected,
    femaleSelected,
    filters,
    teamSize,
    selectedAthletes,
    teamCounter,
    setFilters,
    addAthlete,
    removeAthlete,
  };
}

export default useTeamBuilder;
