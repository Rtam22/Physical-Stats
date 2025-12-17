import type {
  AthleteDataWithAttributes,
  AthleteIdKey,
} from "../../../types/athleteType";
import type { FilterValue } from "../../../types/filterTypes";
import type { ModalType } from "../../../types/modalTypes";
import AthleteGridSection from "../../../features/athletes/components/athleteGridSection";
import Filters from "../filters/filters";

type AthletesTabProps = {
  filter: {
    values: FilterValue;
    setFilters: React.Dispatch<React.SetStateAction<FilterValue>>;
  };
  athletes: AthleteDataWithAttributes[];
  submittedVote: AthleteIdKey[];
  onCardClick: (type: ModalType, athlete: AthleteDataWithAttributes) => void;
};

function AthletesTab({
  filter,
  athletes,
  submittedVote,
  onCardClick,
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
