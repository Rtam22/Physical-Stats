import type { TeamType } from "../../../types/teamType";
import TeamCard from "./teamCard";
import "./teamList.css";

type TeamListProps = {
  type: "teams" | "allstarTeams";
  teams: TeamType[];
  selectedTeam: TeamType | null;
};

function TeamList({ teams, selectedTeam, type }: TeamListProps) {
  return (
    <div className="team-list">
      {type === "teams" && (
        <>
          {selectedTeam && <TeamCard type={type} team={selectedTeam} />}
          {teams.map((team) => {
            return (
              <TeamCard
                type={type}
                key={team.athletes[0].info.team}
                team={team}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default TeamList;
