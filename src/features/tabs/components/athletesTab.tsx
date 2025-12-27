import type {
  AthleteDataWithAttributes,
  AthleteIdKey,
} from "../../../types/athleteType";
import type { FilterValue } from "../../../types/filterTypes";
import type { ModalOpenState } from "../../../types/modalTypes";
import AthleteGridSection from "../../athletes/components/athleteGridSection";
import Filters from "../../../shared/components/filters/filters";

type AthletesTabProps = {
  filter: {
    values: FilterValue;
    setFilters: React.Dispatch<React.SetStateAction<FilterValue>>;
  };
  athletes: AthleteDataWithAttributes[];
  submittedVote: AthleteIdKey[];
  onCardClick: (next: ModalOpenState) => void;
  onRevealAll: () => void;
};

function AthletesTab({
  filter,
  athletes,
  submittedVote,
  onCardClick,
  onRevealAll,
}: AthletesTabProps) {
  return (
    <>
      <Filters
        filterValues={filter.values}
        setFilter={(newFilters) =>
          filter.setFilters((prev) => ({ ...prev, ...newFilters }))
        }
      />
      <AthleteGridSection
        athletes={athletes}
        submittedVote={submittedVote}
        onCardClick={onCardClick}
      />
    </>
  );
}

export default AthletesTab;
