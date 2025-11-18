import type { AthleteDataWithAttributes } from "../types/athleteType";
import type { FilterValue, SortKey } from "../types/filterTypes";

function getValue(athlete: AthleteDataWithAttributes, key: SortKey) {
  if (key === "favorite" || key === "mvp" || key === "total") {
    return athlete[key] ? athlete[key] : 0;
  }

  return athlete.attributes[key] ? athlete.attributes[key] : 0;
}

export function sortAthletes(
  key: SortKey,
  athletes: AthleteDataWithAttributes[]
) {
  return [...athletes].sort((a, b) => getValue(b, key) - getValue(a, key));
}

function filterAthlete(
  filters: FilterValue,
  athlete: AthleteDataWithAttributes
) {
  const teamResult =
    filters.team === athlete.info.team || "none" ? true : false;
  return teamResult;
}

export function applyFilters(
  athletes: AthleteDataWithAttributes[],
  filters: FilterValue
) {
  const filtered = athletes.filter((athlete) => {
    return filterAthlete(filters, athlete);
  });

  const sorted =
    filters.sort === "none" ? filtered : sortAthletes(filters.sort, filtered);

  return sorted;
}
