import type { TeamType } from "../../../types/teamType";
import TeamCountryCard from "./teamCountryCard";
import "./teamList.css";

type TeamListProps = {
  teams: TeamType[];
  selectedTeam: TeamType | null;
};

function TeamList({ teams, selectedTeam }: TeamListProps) {
  return (
    <div className="team-list">
      {selectedTeam && <TeamCountryCard team={selectedTeam} />}
      {teams.map((team) => {
        return <TeamCountryCard key={team.athletes[0].info.team} team={team} />;
      })}
    </div>
  );
}

export default TeamList;
