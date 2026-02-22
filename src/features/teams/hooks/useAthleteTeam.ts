import { useEffect, useMemo, useState } from "react";
import type { BuildTeamType, TeamType } from "../../../types/teamType";
import { postAllstarTeam, teamService } from "../services/teamService";
import type {
  AthleteDataWithAttributes,
  AthleteIdKey,
} from "../../../types/athleteType";
import { athleteList, teamList } from "../../../data/athleteData";
import { buildTeamView, compileUserTeams } from "../../../utils/teamUtils";

type UseAthleteTeamProps = {
  athletes: AthleteDataWithAttributes[];
  userId: string;
};

export function useAthleteTeam({ athletes, userId }: UseAthleteTeamProps) {
  const [selectedTeam, setSelectedTeam] = useState<BuildTeamType | null>(null);
  const [userSubmittedTeams, setUserSubmittedTeams] = useState<BuildTeamType[]>(
    [],
  );

  const selectedTeamView: TeamType | null = useMemo(() => {
    if (!selectedTeam) return null;
    return buildTeamView(selectedTeam, athletes);
  }, [selectedTeam, athletes]);

  const userSubmittedTeamsView: TeamType[] | null = useMemo(() => {
    if (!userSubmittedTeams) return null;
    return userSubmittedTeams.map((team) => buildTeamView(team, athletes));
  }, [userSubmittedTeams, athletes]);

  const allstarTeams = useMemo(() => {
    return compileUserTeams(userSubmittedTeams, athleteList);
  }, [userSubmittedTeams]);

  const countryTeams = useMemo(() => {
    return teamService.buildExistingTeams(teamList, athletes);
  }, [athletes]);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await teamService.fetchAllstarTeams();
        setUserSubmittedTeams(data);
        if (userId) {
          const userTeam = data.find((teams) => teams.user.id === userId);
          if (userTeam) setSelectedTeam(userTeam);
        }
      } catch (err) {
        console.log(err);
      }
    }
    loadData();
  }, []);

  async function handleSetSelectedTeam(
    selectedAthletes: AthleteIdKey[],
    user: { id: string; name: string },
  ) {
    const newTeam = {
      id: "",
      user: { id: user.id, name: user.name },
      athleteIds: selectedAthletes,
    };

    try {
      const res = await postAllstarTeam(newTeam);
      console.log(res);
      setSelectedTeam(res);
      setUserSubmittedTeams((prev) => [...prev, res]);

      return { ok: true };
    } catch (err) {
      console.log(err);
      return { ok: false };
    }
  }

  return {
    selectedTeamView,
    allstarTeams,
    countryTeams,
    userSubmittedTeamsView,
    selectedTeam,
    handleSetSelectedTeam,
  };
}
