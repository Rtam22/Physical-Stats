import type { AthleteIdKey } from "../../../types/athleteType";
import PaginationList from "../../../shared/components/layout/paginationList";
import SubmissionCard from "./submissionCard";
import type { AttributeSubmission } from "../../../types/attributeTypes";

type SubmissionPaginationProps = {
  athlete: AthleteIdKey;
  submissions: AttributeSubmission[];
};

function SubmissionPagination({
  submissions,
  athlete,
}: SubmissionPaginationProps) {
  return (
    <PaginationList
      items={[
        ...submissions
          .filter((submission) => submission.athleteId === athlete)
          .map((submission) => {
            return (
              <SubmissionCard
                key={submission.submissionId}
                submission={submission}
              />
            );
          }),
      ].reverse()}
      title="Submission History"
      itemsAmountOnPage={2}
    />
  );
}

export default SubmissionPagination;
