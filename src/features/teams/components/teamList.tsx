import { motion } from "framer-motion";
import type { TeamType } from "../../../types/teamType";
import TeamCard from "./teamCard";
import "./teamList.css";

type TeamListProps = {
  type: "teams" | "allstarTeams";
  countryTeams: TeamType[];
  selectedTeam: TeamType | null;
};

function TeamList({ countryTeams, selectedTeam, type }: TeamListProps) {
  return (
    <div className="team-list">
      {type === "teams" && (
        <>
          {selectedTeam && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <TeamCard type={type} team={selectedTeam} />
            </motion.div>
          )}
          {countryTeams.map((team) => {
            return (
              <motion.div
                key={team.athletes[0].info.team}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
              >
                <TeamCard type={type} team={team} />
              </motion.div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default TeamList;
