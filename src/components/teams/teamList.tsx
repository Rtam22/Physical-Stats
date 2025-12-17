import type { TeamType } from "../../types/teamType";
import TeamCard from "./teamCard";
import "./teamList.css";

type TeamListProps = {
  teams: TeamType[];
  selectedTeam: TeamType | null;
};

function TeamList({ teams, selectedTeam }: TeamListProps) {
  return (
    <div className="team-list">
      {selectedTeam && <TeamCard team={selectedTeam} />}
      {teams.map((team) => {
        return <TeamCard key={team.athletes[0].info.team} team={team} />;
      })}
    </div>
  );
}

export default TeamList;
