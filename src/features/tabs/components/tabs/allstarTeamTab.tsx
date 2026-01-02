import PaginationList from "../../../../shared/components/layout/paginationList";
import type { AthleteData } from "../../../../types/athleteType";
import type { TeamType, UserTeamType } from "../../../../types/teamType";
import type { UserType } from "../../../../types/userTypes";
import TeamRow from "../../../teams/components/teamRow";
import "./allstarTeamTab.css";
type AllstarTeamTabProps = {
  teams: TeamType[] | null;
};

export type AllStarTeam = {
  users: UserType[];
  team: AthleteData[];
};

function AllstarTeamTab({ teams }: AllstarTeamTabProps) {
  const allStarTeams: AllStarTeam[] = (teams ?? [])
    .filter((team): team is UserTeamType => "user" in team)
    .map((team) => ({
      users: [team.user],
      team: team.athletes,
    }));

  const items =
    allStarTeams &&
    allStarTeams.map((team, index) => (
      <TeamRow
        key={index}
        allstarTeam={team}
        placement={(index + 1).toString()}
      />
    ));

  if (!items) return <p>No teams found...</p>;

  return (
    <div className="allstar-team-tab">
      <PaginationList
        items={items}
        gap="20px"
        itemsAmountOnPage={8}
        styles={{ maxWidth: "1500px" }}
      />
    </div>
  );
}

export default AllstarTeamTab;
