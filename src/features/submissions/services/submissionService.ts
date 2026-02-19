import { fetchApi } from "../../../services/api/api";
import type { AthleteIdKey } from "../../../types/athleteType";
import type {
  AttributeSubmission,
  SubmissionResponseType,
} from "../../../types/attributeTypes";

async function fetchSubmittedVoteAccess(userId: string) {
  const data: AthleteIdKey[] = await fetchApi<AthleteIdKey[]>(
    "/unlockedAthletes",
    {
      headers: { "user-id": userId },
    },
  );
  console.log(data);
  return data;
}

async function fetchSubmissions() {
  const data: AttributeSubmission[] =
    await fetchApi<AttributeSubmission[]>("/submissions");
  console.log(data);
  return data;
}

async function postSubmission(userId: string, submission: AttributeSubmission) {
  const data: SubmissionResponseType = await fetchApi("/submissions", {
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
};
