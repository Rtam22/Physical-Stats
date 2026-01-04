import PaginationList from "../../../../shared/components/layout/paginationList";
import type { AllStarTeam, BuildTeamType } from "../../../../types/teamType";
import type { UserType } from "../../../../types/userTypes";
import { sortByGender, sortByVotes } from "../../../../utils/teamUtils";

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
  const sorted = sortByGender(sortByVotes(allstarTeams));

  const userAllstarIndex = sorted.findIndex((allstar) =>
    allstar.users.some((u) => u.id === user.id)
  );

  const userAllstarTeam = sorted.find((allstar) =>
    allstar.users.some((u) => u.id === user.id)
  );

  const items =
    sorted &&
    sorted.map((team, index) => (
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
