import { fetchApi } from "../../../services/api/api";
import type { AthleteIdKey } from "../../../types/athleteType";
import type {
  AttributeSubmission,
  SubmissionAPIType,
} from "../../../types/attributeTypes";

async function fetchSubmittedVoteAccess(userId: string) {
  const data = await fetchApi<AthleteIdKey[]>("/unlockedAthletes", {
    headers: { "user-id": userId },
  });
  return data;
}

async function fetchSubmissions() {
  const data: AttributeSubmission[] =
    await fetchApi<AttributeSubmission[]>("/submissions");
  return data;
}

async function postUnlockAthletes(userId: string, athleteIds: AthleteIdKey[]) {
  const data = await fetchApi<AthleteIdKey[]>("/unlockedAthletes", {
    method: "POST",
    headers: { "user-id": userId },
    body: JSON.stringify({ athleteIds }),
  });

  return data;
}

async function postSubmission(userId: string, submission: AttributeSubmission) {
  const data = await fetchApi<SubmissionAPIType>("/submissions", {
    method: "POST",
    headers: { "user-id": userId },
    body: JSON.stringify(submission),
  });

  return data;
}

export const submissionService = {
  fetchSubmissions,
  fetchSubmittedVoteAccess,
  postSubmission,
  postUnlockAthletes,
};
