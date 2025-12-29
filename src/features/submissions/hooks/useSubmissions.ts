import { useMemo, useState } from "react";
import type { AthleteIdKey } from "../../../types/athleteType";
import { submissionService } from "../services/submissionService";
import type { AthleteTeams } from "../../../types/teamType";
import { ALL_ATHLETE_IDS } from "../../../data/athleteData";
import type { AttributeSubmission } from "../../../types/attributeTypes";
import { athleteList } from "../../../data/athleteData";

type UseSubmissionProps = {
  userId: string;
};

export function useSubmissions({ userId }: UseSubmissionProps) {
  const [submissions, setSubmissions] = useState<AttributeSubmission[]>(
    submissionService.fetchSubmissions
  );

  const [submittedVoteAccess, setsubmittedVoteAccess] = useState<
    AthleteIdKey[]
  >(["choi-seung-yeon", "jang-eun-sil", "kim-dong-hyun", "yun-sung-bin"]);

  const hasRevealedAll: boolean = useMemo(() => {
    return ALL_ATHLETE_IDS.every((id) => submittedVoteAccess.includes(id));
  }, [submittedVoteAccess]);

  const hasMVPCountries: AthleteTeams[] = useMemo(() => {
    const userSubmissions = submissions.filter(
      (submission) => userId === submission.user.id
    );
    const teams = new Set<AthleteTeams>();
    for (const submission of userSubmissions) {
      if (!submission.mvp) continue;

      const athlete = athleteList.find(
        (athlete) => athlete.info.id === submission.athleteId
      );
      if (!athlete) continue;
      teams.add(athlete?.info.team);
    }

    return Array.from(teams);
  }, [submissions]);

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

  function handleRevealAll() {
    setsubmittedVoteAccess([...ALL_ATHLETE_IDS]);
  }

  function handleSubmitSubmissions(submission: AttributeSubmission) {
    setSubmissions((prev) => [...prev, submission]);
    setsubmittedVoteAccess((prev) => {
      if (prev.includes(submission.athleteId)) return prev;
      return [...prev, submission.athleteId];
    });
  }

  return {
    submissions,
    submittedVoteAccess,
    submittedMVPRestriction,
    hasRevealedAll,
    hasMVPCountries,
    handleSubmitSubmissions,
    handleRevealAll,
  };
}
