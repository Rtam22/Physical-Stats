import type { AllStarTeam, BuildTeamType } from "../../../types/teamType";

import "./teamRow.css";
type TeamRowProps = {
  allstarTeam: AllStarTeam | undefined;
  placement: string;
  noHighlight?: boolean;
  selectedTeam: BuildTeamType | null;
};
function TeamRow({
  allstarTeam,
  placement,
  selectedTeam,
  noHighlight,
}: TeamRowProps) {
  const generatePlacement = (place: string) => {
    if (place === "1") return "🏆";
    if (place === "2") return "🥈";
    if (place === "3") return "🥉";
    return `${place}`;
  };

  const userSelectedTeam = selectedTeam
    ? allstarTeam?.team.every((athlete) =>
        new Set(selectedTeam.athletes).has(athlete.info.id)
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
        {allstarTeam?.team.map((athlete, index) => (
          <div key={index} className="image-container">
            <img src={athlete.info.imgSm}></img>
          </div>
        ))}
      </div>
      <div className="info-container">
        <p>Total votes:</p>
        <p>{allstarTeam?.users.length}</p>
      </div>
    </div>
  );
}

export default TeamRow;
