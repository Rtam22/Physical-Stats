import type { AthleteDataWithAttributes } from "../../../types/athleteType";
import type { ModalOpenState } from "../../../types/modalTypes";
import type { AllStarTeam, BuildTeamType } from "../../../types/teamType";
import "./teamRow.css";
type TeamRowProps = {
  athletes: AthleteDataWithAttributes[];
  allstarTeam: AllStarTeam | undefined;
  placement: string;
  noHighlight?: boolean;
  selectedTeam: BuildTeamType | null;
  onCardClick: (next: ModalOpenState) => void;
};
function TeamRow({
  athletes,
  allstarTeam,
  placement,
  selectedTeam,
  noHighlight,
  onCardClick,
}: TeamRowProps) {
  const generatePlacement = (place: string) => {
    if (place === "1") return "🏆";
    if (place === "2") return "🥈";
    if (place === "3") return "🥉";
    return `${place}`;
  };

  const userSelectedTeam = selectedTeam
    ? allstarTeam?.team.every((athlete) =>
        new Set(selectedTeam.athleteIds).has(athlete.info.id),
      )
    : null;

  return (
    <div
      className={`team-row ${
        userSelectedTeam && !noHighlight ? "highlight" : ""
      }`}
    >
      <div className="placement-container">
        <p
          className={`${
            placement === "1" || placement === "2" || placement === "3"
              ? "medal"
              : ""
          }`}
        >
          {generatePlacement(placement)}
        </p>
      </div>
      <div className="athlete-container">
        {allstarTeam?.team.map((a, index) => {
          const athlete = athletes.find(
            (athlete) => athlete.info.id === a.info.id,
          );

          return (
            <div
              key={index}
              className="image-container"
              style={{ cursor: athlete ? "pointer" : "default" }}
              onClick={() => {
                if (!athlete) return;
                onCardClick({
                  open: true,
                  type: "athleteView",
                  athlete,
                });
              }}
            >
              <img src={a.info.imgSm} alt={a.info.name} />
            </div>
          );
        })}
      </div>
      <div className="info-container">
        <p>Total votes:</p>
        <p>{allstarTeam?.users.length}</p>
      </div>
    </div>
  );
}

export default TeamRow;
