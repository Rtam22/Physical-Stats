import { teamList } from "../../data/athleteData";
import type { FilterValue } from "../../types/filterTypes";
import "./filters.css";

type FilterProps = {
  filterValues: FilterValue;
  setFilter: (newFilters: Partial<FilterValue>) => void;
};

export const initialFilters: FilterValue = {
  sort: "none",
  team: "none",
  mvp: false,
  search: "",
};

function Filters({ filterValues, setFilter }: FilterProps) {
  return (
    <div className="filters">
      <section>
        <label htmlFor="">MVP</label>
        <input
          type="checkbox"
          checked={filterValues.mvp}
          onChange={() => setFilter({ mvp: !filterValues.mvp })}
        />
      </section>
      <section>
        <label htmlFor="">Search</label>
        <input
          type="text"
          value={filterValues.search}
          onChange={(e) => setFilter({ search: e.target.value })}
        />
      </section>
      <section>
        <label htmlFor="">Team</label>
        <select
          id="team"
          value={filterValues.team}
          onChange={(e) =>
            setFilter({ team: e.target.value as FilterValue["team"] })
          }
        >
          <option value="none">None</option>
          {teamList.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </section>
      <section>
        <label htmlFor="attribute">Sort</label>
        <select
          id="attribute"
          value={filterValues.sort}
          onChange={(e) =>
            setFilter({ sort: e.target.value as FilterValue["sort"] })
          }
        >
          <option value="none">None</option>
          <option value="total">Total score</option>
          <option value="favorite">Favorite</option>
          <option value="strength">Strength</option>
          <option value="explosiveness">Explosiveness</option>
          <option value="speed">Speed</option>
          <option value="endurance">Endurance</option>
          <option value="cardio">Cardio</option>
          <option value="grit">Grit</option>
          <option value="leadership">Leadership</option>
        </select>
      </section>
    </div>
  );
}

export default Filters;
