import { useMemo, useState } from "react";
import type { BuildTeamType, TeamType } from "../../../types/teamType";
import { teamService } from "../services/teamService";
import type {
  AthleteDataWithAttributes,
  AthleteIdKey,
} from "../../../types/athleteType";
import { teamList } from "../../../data/athleteData";
import { getTeamAttributes } from "../../../utils/attributeUtils";
import { buildTeamsTestData } from "../../../data/teamData";

type UseAthleteTeamProps = {
  athletes: AthleteDataWithAttributes[];
};

export function useAthleteTeam({ athletes }: UseAthleteTeamProps) {
  const [selectedTeam, setSelectedTeam] = useState<BuildTeamType | null>(null);
  const [userSubmittedTeams, setUserSubmittedTeams] =
    useState<BuildTeamType[]>(buildTeamsTestData);

  const selectedTeamView: TeamType | null = useMemo(() => {
    if (!selectedTeam) return null;
    return buildTeamView(selectedTeam);
  }, [selectedTeam, athletes]);

  const userSubmittedTeamsView: TeamType[] | null = useMemo(() => {
    if (!userSubmittedTeams) return null;
    return userSubmittedTeams.map((team) => buildTeamView(team));
  }, [userSubmittedTeams, athletes]);

  const existingTeams = useMemo(() => {
    return teamService.buildExistingTeams(teamList, athletes);
  }, [athletes]);

  function buildTeamView(team: BuildTeamType) {
    const selectedAthletes = athletes.filter((a) => {
      return team.athletes.includes(a.info.id);
    });
    const newTeam: TeamType = {
      user: { id: team.user.id, name: team.user.name },
      athletes: selectedAthletes,
      averageAttributes: getTeamAttributes(selectedAthletes),
    };
    return newTeam;
  }

  function handleSetSelectedTeam(
    selectedAthletes: AthleteIdKey[],
    user: { id: string; name: string }
  ) {
    setSelectedTeam({
      id: crypto.randomUUID(),
      user: { id: user.id, name: user.name },
      athletes: selectedAthletes,
    });
  }

  return {
    selectedTeamView,
    existingTeams,
    userSubmittedTeamsView,
    handleSetSelectedTeam,
  };
}
