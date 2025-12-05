import type { AttributeSubmission } from "../../types/athleteType";
import "./submissionCard.css";

type SubmissionCardProps = {
  submission: AttributeSubmission;
};

function SubmissionCard({ submission }: SubmissionCardProps) {
  console.log(submission);
  return (
    <div className="submission-card">
      <div className="container-top">
        <div className="flex">
          <p className="dim">User:</p>
          <h4 className="title">{submission.username}</h4>
        </div>
        <div> dsa</div>
      </div>

      <div>
        <div className="comment-container">
          <p className="dim">Comment:</p>
          <div className="comment">{submission.comment}</div>
        </div>
        <div className="attributes"></div>
      </div>
    </div>
  );
}

export default SubmissionCard;
