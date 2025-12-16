import { useEffect, useState } from "react";
import type { TeamType } from "../types/teamType";
import { teamService } from "../services/teamService";
import type { AthleteDataWithAttributes } from "../types/athleteType";
import { teamList } from "../data/athleteData";
import { getTeamAttributes } from "../utils/attributeUtils";

type UseAthleteTeamProps = {
  athletes: AthleteDataWithAttributes[];
};

export function useAthleteTeam({ athletes }: UseAthleteTeamProps) {
  const [selectedTeam, setSelectedTeam] = useState<TeamType | null>(null);
  const [existingTeams, setExistingTeams] = useState<TeamType[]>([]);

  useEffect(() => {
    const teams: TeamType[] = teamService.buildExistingTeams(
      teamList,
      athletes
    );
    setExistingTeams(teams);
  }, [athletes]);

  function handleSetSelectedTeam(
    athletes: AthleteDataWithAttributes[],
    user: string
  ) {
    const newTeam: TeamType = {
      user: user,
      athletes: athletes,
      averageAttributes: getTeamAttributes(athletes),
    };
    setSelectedTeam(newTeam);
  }

  return { selectedTeam, existingTeams, handleSetSelectedTeam };
}
