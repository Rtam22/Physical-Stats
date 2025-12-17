import { useMemo } from "react";
import type { AthleteDataWithAttributes } from "../../../types/athleteType";
import type { FilterValue } from "../../../types/filterTypes";
import { applyFilters } from "../../../utils/filterUtils";

type UseAthleteFiltersProps = {
  filters: FilterValue;
  athletes: AthleteDataWithAttributes[];
};

function useAthleteFilters({ filters, athletes }: UseAthleteFiltersProps) {
  const filteredAthletes = useMemo(() => {
    return applyFilters(athletes, filters);
  }, [filters, athletes]);
  return { filteredAthletes };
}

export default useAthleteFilters;
