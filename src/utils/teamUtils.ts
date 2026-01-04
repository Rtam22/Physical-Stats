import type {
  AthleteData,
  AthleteDataWithAttributes,
} from "../types/athleteType";
import type {
  AllStarTeam,
  AthleteTeams,
  BuildTeamType,
  CountryCode,
  TeamType,
} from "../types/teamType";
import type { UserType } from "../types/userTypes";
import { getTeamAttributes } from "./attributeUtils";

export const COUNTRY_CODE_MAP: Record<AthleteTeams, CountryCode> = {
  "South Korea": "KR",
  Japan: "JP",
  Turkey: "TR",
  Mongolia: "MN",
  Australia: "AU",
  Philippines: "PH",
  Indonesia: "ID",
  Thailand: "TH",
};

export function getCountryCode(country: AthleteTeams): CountryCode | undefined {
  return COUNTRY_CODE_MAP[country];
}

export function buildTeamView(
  team: BuildTeamType,
  athletes: AthleteDataWithAttributes[]
) {
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

export function compileUserTeams(
  userSubmittedTeams: BuildTeamType[],
  athletes: AthleteData[]
) {
  let allstarTeamsDraft: AllStarTeam[] = [];
  for (const userTeam of userSubmittedTeams) {
    const user = userTeam.user as UserType;
    const athleteIdSet = new Set(userTeam.athletes);
    const team: AthleteData[] = athletes.filter((athlete) =>
      athleteIdSet.has(athlete.info.id)
    );
    const index = allstarTeamsDraft.findIndex((team) => {
      return team.team.every((t) => athleteIdSet.has(t.info.id));
    });

    if (index !== -1) {
      const users = allstarTeamsDraft[index].users;
      if (!users.some((u) => u.id === user.id)) {
        users.push(user);
      }
    } else {
      allstarTeamsDraft.push({ team: team, users: [user] });
    }
  }
  return allstarTeamsDraft;
}
