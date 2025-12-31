import { useMemo, useState } from "react";
import type { TeamType } from "../../../types/teamType";
import { teamService } from "../services/teamService";
import type {
  AthleteDataWithAttributes,
  AthleteIdKey,
} from "../../../types/athleteType";
import { teamList } from "../../../data/athleteData";
import { getTeamAttributes } from "../../../utils/attributeUtils";
import type { UserType } from "../../../types/userTypes";

type UseAthleteTeamProps = {
  athletes: AthleteDataWithAttributes[];
};

type BuildTeamType = {
  id: string;
  user: UserType;
  athletes: AthleteIdKey[];
};

export function useAthleteTeam({ athletes }: UseAthleteTeamProps) {
  const [selectedTeam, setSelectedTeam] = useState<BuildTeamType | null>(null);

  const selectedTeamView: TeamType | null = useMemo(() => {
    if (selectedTeam) {
      const selectedAthletes = athletes.filter((a) => {
        return selectedTeam.athletes.includes(a.info.id);
      });
      const newTeam: TeamType = {
        user: { id: selectedTeam.user.id, name: selectedTeam.user.name },
        athletes: selectedAthletes,
        averageAttributes: getTeamAttributes(selectedAthletes),
      };
      return newTeam;
    }
    return null;
  }, [selectedTeam, athletes]);

  const existingTeams = useMemo(() => {
    return teamService.buildExistingTeams(teamList, athletes);
  }, [athletes]);

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

  return { selectedTeamView, existingTeams, handleSetSelectedTeam };
}
