import type {
  AthleteDataWithAttributes,
  AttributeSubmission,
} from "../../../types/athleteType";
import "./athleteView.css";
import AttributeBar from "../../attributes/components/attributeBar";
import SubmissionPagination from "../../submissions/components/submission/submissionPagination";

type AtheleteViewProps = {
  athlete: AthleteDataWithAttributes;
  submissions: AttributeSubmission[];
};

function AthleteView({ submissions, athlete }: AtheleteViewProps) {
  return (
    <div className="athlete-view">
      <div className="athlete-info">
        <div className="image-container">
          <img
            src={athlete.info.img}
            alt={`Portrait of ${athlete.info.name}`}
          />
        </div>
        <div className="information-container">
          <span>
            <h2>{athlete.info.name}</h2>
            <h2>*{athlete.favorite}</h2>{" "}
          </span>
          <p></p>
          <div className="attribute-container">
            {Object.entries(athlete.attributes).map(([key, value]) => {
              const title = key.charAt(0).toUpperCase() + key.slice(1);
              return (
                <AttributeBar
                  key={key}
                  title={title}
                  value={value}
                  height="30px"
                />
              );
            })}
          </div>
        </div>
      </div>
      <SubmissionPagination
        submissions={submissions}
        athlete={athlete.info.id}
      />
    </div>
  );
}

export default AthleteView;
