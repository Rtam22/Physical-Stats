import { useMemo, useState } from "react";
import type { BuildTeamType, TeamType } from "../../../types/teamType";
import { teamService } from "../services/teamService";
import type {
  AthleteDataWithAttributes,
  AthleteIdKey,
} from "../../../types/athleteType";
import { athleteList, teamList } from "../../../data/athleteData";
import { buildTeamsTestData } from "../../../data/teamData";
import { buildTeamView, compileUserTeams } from "../../../utils/teamUtils";

type UseAthleteTeamProps = {
  athletes: AthleteDataWithAttributes[];
};

export function useAthleteTeam({ athletes }: UseAthleteTeamProps) {
  const [selectedTeam, setSelectedTeam] = useState<BuildTeamType | null>(null);
  const [userSubmittedTeams, setUserSubmittedTeams] =
    useState<BuildTeamType[]>(buildTeamsTestData);

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

  function handleSetSelectedTeam(
    selectedAthletes: AthleteIdKey[],
    user: { id: string; name: string }
  ) {
    const newTeam = {
      id: crypto.randomUUID(),
      user: { id: user.id, name: user.name },
      athletes: selectedAthletes,
    };
    setSelectedTeam(newTeam);
    setUserSubmittedTeams((prev) => [...prev, newTeam]);
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
