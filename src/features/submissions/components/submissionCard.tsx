import type { AttributeSubmission } from "../../../types/attributeTypes";
import AttributeBar from "../../attributes/components/attributeBar";
import "./submissionCard.css";

type SubmissionCardProps = {
  submission: AttributeSubmission;
};

function SubmissionCard({ submission }: SubmissionCardProps) {
  return (
    <div className="submission-card">
      <div className="user-container">
        <p className="dim">User:</p>
        <h4 className="title">{submission.user.name}</h4>
      </div>
      <div className="flex">
        <div className="comment-container">
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
          <p className="dim">Attributes:</p>
          <div className="attributes">
            {Object.entries(submission.values).map(([key, value]) => {
              const title = key.charAt(0).toUpperCase() + key.slice(1);
              return <AttributeBar key={key} title={title} value={value} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmissionCard;
