import PaginationList from "../../../../shared/components/layout/paginationList";
import type { AthleteDataWithAttributes } from "../../../../types/athleteType";
import type { ModalOpenState } from "../../../../types/modalTypes";
import type { AllStarTeam, BuildTeamType } from "../../../../types/teamType";
import type { UserType } from "../../../../types/userTypes";
import { sortByGender, sortByVotes } from "../../../../utils/teamUtils";

import TeamRow from "../../../teams/components/teamRow";
import "./allstarTeamTab.css";
type AllstarTeamTabProps = {
  athletes: AthleteDataWithAttributes[];
  allstarTeams: AllStarTeam[];
  selectedTeam: BuildTeamType | null;
  user: UserType;
  onCardClick: (next: ModalOpenState) => void;
};

function AllstarTeamTab({
  athletes,
  selectedTeam,
  allstarTeams,
  user,
  onCardClick,
}: AllstarTeamTabProps) {
  const sorted = sortByGender(sortByVotes(allstarTeams));

  const userAllstarIndex = sorted.findIndex((allstar) =>
    allstar.users.some((u) => u.id === user.id),
  );

  const userAllstarTeam = sorted.find((allstar) =>
    allstar.users.some((u) => u.id === user.id),
  );

  const items =
    sorted &&
    sorted.map((team, index) => (
      <TeamRow
        athletes={athletes}
        key={index}
        allstarTeam={team}
        selectedTeam={selectedTeam}
        placement={(index + 1).toString()}
        onCardClick={onCardClick}
      />
    ));

  if (!items) return <p>No teams found...</p>;

  return (
    <div className="allstar-team-tab">
      <div className="user-team-container">
        <h3>Your Team</h3>
        <TeamRow
          athletes={athletes}
          noHighlight={true}
          allstarTeam={userAllstarTeam}
          selectedTeam={selectedTeam}
          placement={(userAllstarIndex + 1).toString()}
          onCardClick={onCardClick}
        />
      </div>
      <PaginationList
        title="Allstar Teams"
        items={items}
        gap="20px"
        itemsAmountOnPage={5}
        styles={{ maxWidth: "1500px" }}
      />
    </div>
  );
}

export default AllstarTeamTab;
