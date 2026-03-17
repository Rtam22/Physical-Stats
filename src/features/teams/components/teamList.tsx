import { motion } from "framer-motion";
import type { TeamType } from "../../../types/teamType";
import TeamCard from "./teamCard";
import "./teamList.css";
import type { ModalOpenState } from "../../../types/modalTypes";
import type { AthleteDataWithAttributes } from "../../../types/athleteType";

type TeamListProps = {
  athletes: AthleteDataWithAttributes[];
  type: "teams" | "allstarTeams";
  countryTeams: TeamType[];
  selectedTeam: TeamType | null;
  onCardClick: (next: ModalOpenState) => void;
};

function TeamList({
  athletes,
  countryTeams,
  selectedTeam,
  type,
  onCardClick,
}: TeamListProps) {
  return (
    <div className="team-list">
      {type === "teams" && (
        <>
          {selectedTeam && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <TeamCard
                athletes={athletes}
                type={type}
                team={selectedTeam}
                onCardClick={onCardClick}
              />
            </motion.div>
          )}
          {countryTeams.map((team) => {
            return (
              <motion.div
                key={team.athletes[0].info.team}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <TeamCard
                  athletes={athletes}
                  type={type}
                  team={team}
                  onCardClick={onCardClick}
                />
              </motion.div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default TeamList;
