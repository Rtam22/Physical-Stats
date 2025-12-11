import type {
  AthleteDataWithAttributes,
  AthleteIdKey,
} from "../types/athleteType";
import type { FilterValue, SortKey } from "../types/filterTypes";

export const baseFilters: FilterValue = {
  sort: "none",
  team: "none",
  mvp: false,
  search: "",
};

function getValue(athlete: AthleteDataWithAttributes, key: SortKey) {
  if (key === "favorite" || key === "total") {
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
    filters.team === "none" ? true : filters.team === athlete.info.team;

  const mvpResult = filters.mvp === false ? true : athlete.mvp ? true : false;

  const searchResult = searchFilter(filters.search, athlete);

  return teamResult && mvpResult && searchResult;
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

export function searchFilter(
  searchTerm: string,
  athlete: AthleteDataWithAttributes
) {
  return searchTerm === ""
    ? true
    : athlete.info.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        athlete.info.team.toLowerCase().includes(searchTerm.toLowerCase());
}

export function filterAthletesBySubmitted(
  submitted: AthleteIdKey[],
  athletes: AthleteDataWithAttributes[]
) {
  let filteredAthletes: AthleteDataWithAttributes[] = [];
  for (const id of submitted) {
    const athlete = athletes.find((a) => id === a.info.id);
    if (athlete) filteredAthletes = [...filteredAthletes, athlete];
  }
  return filteredAthletes;
}

export function filterByMale(athletes: AthleteDataWithAttributes[]) {
  return athletes.filter((athlete) => athlete.info.gender === "male");
}

export function filterByFemale(athletes: AthleteDataWithAttributes[]) {
  return athletes.filter((athlete) => athlete.info.gender === "female");
}
