import { useState } from "react";
import type {
  AthleteIdKey,
  AthleteTeams,
  AttributeSubmission,
} from "../types/athleteType";
import { submissionService } from "../services/submissionService";

export function useSubmissions() {
  const [submissions, setSubmissions] = useState<AttributeSubmission[]>(
    submissionService.fetchSubmissions
  );
  const [submittedVote, setSubmittedVote] = useState<AthleteIdKey[]>([
    "kim-dong-hyun",
    "kim-min-jae",
  ]);

  const [submittedMVP, setSubmittedMVP] = useState<AthleteTeams[]>();

  function handleSubmitSubmissions(submission: AttributeSubmission) {
    setSubmissions((prev) => [...prev, submission]);
    setSubmittedVote((prev) => [...prev, submission.athleteId]);
  }

  return { submissions, submittedVote, handleSubmitSubmissions };
}
