import type { AthleteDataWithAttributes } from "../types/athleteType";
import type { AthleteTeams, TeamType } from "../types/teamType";
import { getTeamAttributes } from "../utils/attributeUtils";

export function buildExistingTeams(
  teams: AthleteTeams[],
  athletes: AthleteDataWithAttributes[]
) {
  const builtTeams: TeamType[] = teams.map((team) => {
    const athletesInTeam = athletes.filter(
      (athlete) => athlete.info.team === team
    );

    const avgAttributes = getTeamAttributes(athletes, team);
    const result: TeamType = {
      athletes: athletesInTeam,
      averageAttributes: avgAttributes,
      team: team,
    };
    return result;
  });

  return builtTeams;
}

export const teamService = { buildExistingTeams };
