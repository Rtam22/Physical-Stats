import { useState } from "react";
import type { AthleteIdKey, AttributeSubmission } from "../types/athleteType";
import { submissionService } from "../services/submissionService";

export function useSubmissions() {
  const [submissions, setSubmissions] = useState<AttributeSubmission[]>(
    submissionService.fetchSubmissions
  );
  const [submittedVote, setSubmittedVote] = useState<AthleteIdKey[]>([
    "kim-dong-hyun",
    "kim-min-jae",
    "yun-sung-bin",
    "jang-eun-sil",
    "choi-seung-yeon",
    "kim-hae-jong",
  ]);

  //const [submittedMVP, setSubmittedMVP] = useState<AthleteTeams[]>();

  function handleSubmitSubmissions(submission: AttributeSubmission) {
    setSubmissions((prev) => [...prev, submission]);
    setSubmittedVote((prev) => [...prev, submission.athleteId]);
  }

  return { submissions, submittedVote, handleSubmitSubmissions };
}
