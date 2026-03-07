import type { AthleteDataWithAttributes } from "../../../../types/athleteType";
import type { FilterValue } from "../../../../types/filterTypes";
import type { ModalOpenState } from "../../../../types/modalTypes";
import AthleteGridSection from "../../../athletes/components/athleteGridSection";
import Filters from "../../../../shared/components/filters/filters";
import "./athletesTab.css";
import type { useSubmissions } from "../../../submissions/hooks/useSubmissions";
import Loader from "../../../../shared/components/ui/loader";
type AthletesTabProps = {
  filter: {
    values: FilterValue;
    setFilters: React.Dispatch<React.SetStateAction<FilterValue>>;
  };
  athletes: AthleteDataWithAttributes[];
  submissions: ReturnType<typeof useSubmissions>;
  onCardClick: (next: ModalOpenState) => void;
  onRevealAll: () => void;
};

function AthletesTab({
  filter,
  athletes,
  submissions,
  onCardClick,
  onRevealAll,
}: AthletesTabProps) {
  let content;

  if (!submissions.initialized || submissions.loading) {
    content = (
      <div>
        <Loader type="body" size={120} />
      </div>
    );
  } else if (submissions.error) {
    content = (
      <div className="error-body-container">
        <p>{submissions.error}</p>
      </div>
    );
  } else {
    content = (
      <>
        {!submissions.hasRevealedAll && (
          <div className="athletes-button-container">
            <button onClick={onRevealAll}>Reveal all stats</button>
          </div>
        )}

        <AthleteGridSection
          athletes={athletes}
          submittedVote={submissions.submittedVoteAccess}
          onCardClick={onCardClick}
          cardLoadingId={submissions.cardLoadingId}
        />
      </>
    );
  }

  return (
    <div className="athletes-tab">
      <Filters
        filterValues={filter.values}
        setFilter={(newFilters) =>
          filter.setFilters((prev) => ({ ...prev, ...newFilters }))
        }
      />
      {content}
    </div>
  );
}

export default AthletesTab;
