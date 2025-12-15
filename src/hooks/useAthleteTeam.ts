import { useEffect, useState } from "react";
import type { TeamType } from "../types/teamType";
import { teamService } from "../services/teamService";
import type { AthleteDataWithAttributes } from "../types/athleteType";
import { teamList } from "../data/athleteData";
import { sumAttributeValues } from "../utils/attributeUtils";

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
  }, []);

  function handleSetSelectedTeam(
    athletes: AthleteDataWithAttributes[],
    user: string
  ) {
    const attributes = athletes.map((athlete) => athlete.attributes);
    const newTeam: TeamType = {
      user: user,
      athletes: athletes,
      avgAttributes: sumAttributeValues(attributes),
    };
    setSelectedTeam(newTeam);
  }

  return { selectedTeam, existingTeams, handleSetSelectedTeam };
}
