import { fetchApi } from "../../../services/api/api";
import type { AthleteDataWithAttributes } from "../../../types/athleteType";
import type {
  AthleteTeams,
  BuildTeamType,
  TeamType,
} from "../../../types/teamType";
import { getTeamAttributes } from "../../../utils/attributeUtils";

export async function postAllstarTeam(team: BuildTeamType) {
  const res = await fetchApi<BuildTeamType>("/allstarTeams", {
    method: "POST",
    headers: { "user-id": team.user.id },
    body: JSON.stringify(team),
  });

  return res;
}

export async function fetchAllstarTeams() {
  const data = await fetchApi<BuildTeamType[]>("/allstarTeams");
  return data;
}

export function buildExistingTeams(
  teams: AthleteTeams[],
  athletes: AthleteDataWithAttributes[],
) {
  const builtTeams: TeamType[] = teams.map((team) => {
    const athletesInTeam = athletes.filter(
      (athlete) => athlete.info.team === team,
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

export const teamService = { buildExistingTeams, fetchAllstarTeams };
