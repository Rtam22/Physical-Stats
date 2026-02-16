import { fetchApi } from "../../../services/api/api";
import type { AttributeSubmission } from "../../../types/attributeTypes";

async function fetchSubmissions() {
  const data: AttributeSubmission[] =
    await fetchApi<AttributeSubmission[]>("/submissions");
  console.log(data);
  return data;
}

async function postSubmission(userId: string, submission: AttributeSubmission) {
  const data = await fetchApi<AttributeSubmission>("/submissions", {
    method: "POST",
    headers: { "user-id": userId },
    body: JSON.stringify(submission),
  });

  return data;
}

export const submissionService = {
  fetchSubmissions,
  postSubmission,
};
