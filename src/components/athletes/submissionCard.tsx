import type { AttributeSubmission } from "../../types/athleteType";
import AttributeBar from "./attributes/attributeBar";
import "./submissionCard.css";

type SubmissionCardProps = {
  submission: AttributeSubmission;
};

function SubmissionCard({ submission }: SubmissionCardProps) {
  console.log(submission);
  return (
    <div className="submission-card">
      <div className="flex">
        <div className="information-container">
          <div className="user-container">
            <p className="dim">User:</p>
            <h4 className="title">{submission.username}</h4>
          </div>
          <p className="dim">Comment:</p>
          <div
            className={`comment ${submission.comment === "" ? "grayed" : ""}`}
          >
            {submission.comment !== ""
              ? submission.comment
              : "User has not added a comment"}
          </div>
        </div>
        <div className="attribute-container">
          {Object.entries(submission.values).map(([key, value]) => {
            const title = key.charAt(0).toUpperCase() + key.slice(1);
            return <AttributeBar key={key} title={title} value={value} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SubmissionCard;
