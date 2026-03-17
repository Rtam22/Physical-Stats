import type {
  AthleteDataWithAttributes,
  AthleteIdKey,
} from "../../../types/athleteType";
import "./athleteView.css";
import SubmissionPagination from "../../submissions/components/submissionPagination";
import type { AttributeSubmission } from "../../../types/attributeTypes";
import AthleteCard from "./athleteCard";

type AtheleteViewProps = {
  athlete: AthleteIdKey;
  athletes: AthleteDataWithAttributes[];
  submissions: AttributeSubmission[];
};

function AthleteView({ submissions, athlete, athletes }: AtheleteViewProps) {
  const selectedAthlete = athletes.find((a) => a.info.id === athlete);
  return (
    <div className="athlete-view">
      {selectedAthlete ? (
        <>
          <AthleteCard type="view" athlete={selectedAthlete} />
          <SubmissionPagination
            submissions={submissions}
            athlete={selectedAthlete.info.id}
          />
        </>
      ) : (
        <div>Could not find athlete</div>
      )}
    </div>
  );
}

export default AthleteView;
