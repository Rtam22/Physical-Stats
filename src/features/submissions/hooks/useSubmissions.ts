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
import { getErrorMessage } from "../../../utils/errorUtils";

type UseSubmissionProps = {
  userId: string;
};

export function useSubmissions({ userId }: UseSubmissionProps) {
  const [submissions, setSubmissions] = useState<AttributeSubmission[]>([]);
  const [submittedVoteAccess, setsubmittedVoteAccess] = useState<
    AthleteIdKey[]
  >([]);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [cardLoadingId, setCardLoadingId] = useState<AthleteIdKey | null>(null);

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
      try {
        setLoading(true);
        const submissionData = await submissionService.fetchSubmissions();
        const submittedVoteAccessData: AthleteIdKey[] =
          await submissionService.fetchSubmittedVoteAccess(userId);
        setSubmissions(submissionData);
        setsubmittedVoteAccess(submittedVoteAccessData);
      } catch (err) {
        setError(getErrorMessage(err));
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    }
    loadData();
  }, [userId]);

  async function handleRevealAll() {
    const revealedArray = [...ALL_ATHLETE_IDS];
    try {
      const res = await submissionService.postUnlockAthletes(
        userId,
        revealedArray,
      );
      if (res) setsubmittedVoteAccess(revealedArray);
    } catch (err) {
      setError(getErrorMessage(err));
    }
  }

  async function handleSubmitSubmissions(submission: AttributeSubmission) {
    setCardLoadingId(submission.athleteId);
    try {
      throw new Error("simulated error");
      const res: SubmissionAPIType = await submissionService.postSubmission(
        userId,
        submission,
      );
      setSubmissions((prev) => [...prev, res.submission]);
      setsubmittedVoteAccess([...res.voteAccess]);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setCardLoadingId(null);
    }
  }

  return {
    submissions,
    submittedVoteAccess,
    submittedMVPRestriction,
    hasRevealedAll,
    hasMVPCountries,
    loading,
    cardLoadingId,
    error,
    initialized,
    handleSubmitSubmissions,
    handleRevealAll,
  };
}
