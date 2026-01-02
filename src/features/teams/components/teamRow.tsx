import type { AllStarTeam } from "../../tabs/components/tabs/allstarTeamTab";
import "./teamRow.css";
type TeamRowProps = {
  allstarTeam: AllStarTeam | undefined;
  placement: string;
};
function TeamRow({ allstarTeam, placement }: TeamRowProps) {
  return (
    <div className="team-row">
      <div className="placement-container">
        <p>{placement}</p>
      </div>
      <div className="athlete-container">
        {allstarTeam?.team.map((athlete, index) => (
          <div key={index} className="image-container">
            <img src={athlete.info.imgSm}></img>
          </div>
        ))}
      </div>
      <div className="info-container">
        <p>Pick count:</p>
        <p>{allstarTeam?.users.length}</p>
      </div>
    </div>
  );
}

export default TeamRow;
