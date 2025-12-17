import type {
  AthleteIdKey,
  AttributeSubmission,
} from "../../../../types/athleteType";
import PaginationList from "../../../../shared/components/layout/paginationList";
import SubmissionCard from "./submissionCard";

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
            return <SubmissionCard submission={submission} />;
          }),
      ]}
      title="Submission History"
      itemsAmountOnPage={3}
    />
  );
}

export default SubmissionPagination;
