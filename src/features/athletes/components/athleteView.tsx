import type { AthleteDataWithAttributes } from "../../../types/athleteType";
import "./athleteView.css";
import SubmissionPagination from "../../submissions/components/submissionPagination";
import type { AttributeSubmission } from "../../../types/attributeTypes";
import AthleteCard from "./athleteCard";

type AtheleteViewProps = {
  athlete: AthleteDataWithAttributes;
  submissions: AttributeSubmission[];
};

function AthleteView({ submissions, athlete }: AtheleteViewProps) {
  return (
    <div className="athlete-view">
      <AthleteCard type="view" athlete={athlete} />
      <SubmissionPagination
        submissions={submissions}
        athlete={athlete.info.id}
      />
    </div>
  );
}

export default AthleteView;
