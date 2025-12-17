import { useMemo, useState } from "react";
import type {
  AthleteIdKey,
  AttributeSubmission,
} from "../../../types/athleteType";
import { submissionService } from "../services/submissionService";
import type { AthleteTeams } from "../../../types/teamType";
import { athleteList } from "../../../data/athleteData";

export function useSubmissions() {
  const [submissions, setSubmissions] = useState<AttributeSubmission[]>(
    submissionService.fetchSubmissions
  );

  const [submittedVoteAccess, setsubmittedVoteAccess] = useState<
    AthleteIdKey[]
  >(["choi-seung-yeon", "jang-eun-sil", "kim-dong-hyun", "yun-sung-bin"]);

  /*   const submittedVoteAccess = useMemo<AthleteIdKey[]>(() => {
    return submissions.map((s) => s.athleteId);
  }, [submissions]); */

  const submittedMVPRestriction = useMemo(() => {
    const teams = new Set<AthleteTeams>();
    for (const submission of submissions) {
      if (!submission.mvp) continue;
      const athlete = athleteList.find(
        (a) => a.info.id === submission.athleteId
      );

      if (!athlete) continue;
      teams.add(athlete.info.team);
    }
    return [...teams];
  }, [submissions]);

  function handleSubmitSubmissions(submission: AttributeSubmission) {
    setSubmissions((prev) => [...prev, submission]);
    setsubmittedVoteAccess((prev) => [...prev, submission.athleteId]);
  }

  return {
    submissions,
    submittedVoteAccess,
    submittedMVPRestriction,
    handleSubmitSubmissions,
  };
}
