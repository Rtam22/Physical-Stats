import PaginationList from "../../../../shared/components/layout/paginationList";
import type { AllStarTeam, BuildTeamType } from "../../../../types/teamType";
import type { UserType } from "../../../../types/userTypes";

import TeamRow from "../../../teams/components/teamRow";
import "./allstarTeamTab.css";
type AllstarTeamTabProps = {
  allstarTeams: AllStarTeam[];
  selectedTeam: BuildTeamType | null;
  user: UserType;
};

function AllstarTeamTab({
  selectedTeam,
  allstarTeams,
  user,
}: AllstarTeamTabProps) {
  const sortedByVotes = [...allstarTeams].sort(
    (a, b) => b.users.length - a.users.length
  );

  const sortedByGender = sortedByVotes.map((team) => ({
    ...team,
    team: [...team.team].sort((a, b) =>
      a.info.gender === b.info.gender ? 0 : a.info.gender === "male" ? -1 : 1
    ),
  }));

  const userAllstarIndex = sortedByGender.findIndex((allstar) =>
    allstar.users.some((u) => u.id === user.id)
  );

  const userAllstarTeam = sortedByGender.find((allstar) =>
    allstar.users.some((u) => u.id === user.id)
  );

  const items =
    sortedByGender &&
    sortedByGender.map((team, index) => (
      <TeamRow
        key={index}
        allstarTeam={team}
        selectedTeam={selectedTeam}
        placement={(index + 1).toString()}
      />
    ));

  if (!items) return <p>No teams found...</p>;

  return (
    <div className="allstar-team-tab">
      <div className="user-team-container">
        <p>Your Team</p>
        <TeamRow
          noHighlight={true}
          allstarTeam={userAllstarTeam}
          selectedTeam={selectedTeam}
          placement={(userAllstarIndex + 1).toString()}
        />
      </div>
      <PaginationList
        items={items}
        gap="20px"
        itemsAmountOnPage={5}
        styles={{ maxWidth: "1500px" }}
      />
    </div>
  );
}

export default AllstarTeamTab;
