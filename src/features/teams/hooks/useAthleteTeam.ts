import { useMemo, useState } from "react";
import type { TeamType } from "../../../types/teamType";
import { teamService } from "../services/teamService";
import type {
  AthleteDataWithAttributes,
  AthleteIdKey,
} from "../../../types/athleteType";
import { teamList } from "../../../data/athleteData";
import { getTeamAttributes } from "../../../utils/attributeUtils";

type UseAthleteTeamProps = {
  athletes: AthleteDataWithAttributes[];
};

export function useAthleteTeam({ athletes }: UseAthleteTeamProps) {
  const [selectedTeam, setSelectedTeam] = useState<{
    user: string;
    athletes: AthleteIdKey[];
  } | null>(null);

  const selectedTeamView: TeamType | null = useMemo(() => {
    if (selectedTeam) {
      const selectedAthletes = athletes.filter((a) => {
        return selectedTeam.athletes.includes(a.info.id);
      });
      const newTeam: TeamType = {
        user: selectedTeam.user,
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
    user: string
  ) {
    setSelectedTeam({ user: user, athletes: selectedAthletes });
  }

  return { selectedTeamView, existingTeams, handleSetSelectedTeam };
}
