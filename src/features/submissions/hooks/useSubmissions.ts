import { useEffect, useMemo, useState } from "react";
import type { AthleteIdKey } from "../../../types/athleteType";
import { submissionService } from "../services/submissionService";
import type { AthleteTeams } from "../../../types/teamType";
import { ALL_ATHLETE_IDS } from "../../../data/athleteData";
import type {
  AttributeSubmission,
  SubmissionAPIType,
} from "../../../types/attributeTypes";
import { athleteList } from "../../../data/athleteData";

type UseSubmissionProps = {
  userId: string;
};

export function useSubmissions({ userId }: UseSubmissionProps) {
  const [submissions, setSubmissions] = useState<AttributeSubmission[]>([]);
  const [submittedVoteAccess, setsubmittedVoteAccess] = useState<
    AthleteIdKey[]
  >([]);
  const hasRevealedAll: boolean = useMemo(() => {
    return ALL_ATHLETE_IDS.every((id) => submittedVoteAccess.includes(id));
  }, [submittedVoteAccess]);

  const hasMVPCountries: AthleteTeams[] = useMemo(() => {
    const userSubmissions = submissions.filter(
      (submission) => userId === submission.user.id,
    );
    const teams = new Set<AthleteTeams>();
    for (const submission of userSubmissions) {
      if (!submission.mvp) continue;

      const athlete = athleteList.find(
        (athlete) => athlete.info.id === submission.athleteId,
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
        (a) => a.info.id === submission.athleteId,
      );

      if (!athlete) continue;
      teams.add(athlete.info.team);
    }
    return [...teams];
  }, [submissions]);

  useEffect(() => {
    async function loadData() {
      if (!userId) return;
      const submissionData = await submissionService.fetchSubmissions();
      const submittedVoteAccessData: AthleteIdKey[] =
        await submissionService.fetchSubmittedVoteAccess(userId);
      setSubmissions(submissionData);
      setsubmittedVoteAccess(submittedVoteAccessData);
    }
    loadData();
  }, [userId]);

  function handleRevealAll() {
    setsubmittedVoteAccess([...ALL_ATHLETE_IDS]);
  }

  async function handleSubmitSubmissions(submission: AttributeSubmission) {
    const res: SubmissionAPIType = await submissionService.postSubmission(
      userId,
      submission,
    );
    setSubmissions((prev) => [...prev, res.submission]);
    setsubmittedVoteAccess([...res.voteAccess]);
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
