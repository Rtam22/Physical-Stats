import type {
  AthleteDataWithAttributes,
  AthleteIdKey,
} from "../../../../types/athleteType";
import type { FilterValue } from "../../../../types/filterTypes";
import type { ModalOpenState } from "../../../../types/modalTypes";
import AthleteGridSection from "../../../athletes/components/athleteGridSection";
import Filters from "../../../../shared/components/filters/filters";
import "./athletesTab.css";
type AthletesTabProps = {
  filter: {
    values: FilterValue;
    setFilters: React.Dispatch<React.SetStateAction<FilterValue>>;
  };
  athletes: AthleteDataWithAttributes[];
  submittedVote: AthleteIdKey[];
  hasRevealedAll: boolean;
  onCardClick: (next: ModalOpenState) => void;
  onRevealAll: () => void;
};

function AthletesTab({
  filter,
  athletes,
  submittedVote,
  hasRevealedAll,
  onCardClick,
  onRevealAll,
}: AthletesTabProps) {
  return (
    <div className="athletes-tab">
      <Filters
        filterValues={filter.values}
        setFilter={(newFilters) =>
          filter.setFilters((prev) => ({ ...prev, ...newFilters }))
        }
      />
      {!hasRevealedAll && (
        <div className="athletes-button-container">
          <button onClick={onRevealAll}>Reveal all stats</button>
        </div>
      )}

      <AthleteGridSection
        athletes={athletes}
        submittedVote={submittedVote}
        onCardClick={onCardClick}
      />
    </div>
  );
}

export default AthletesTab;
