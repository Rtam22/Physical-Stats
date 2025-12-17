import { attributeSubmissionsTest } from "../../../data/athleteData";

function fetchSubmissions() {
  const submissions = attributeSubmissionsTest;
  return submissions;
}

export const submissionService = {
  fetchSubmissions,
};
