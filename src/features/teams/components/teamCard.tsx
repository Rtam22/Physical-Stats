import type { AthleteDataWithAttributes } from "../../../types/athleteType";
import type { ModalOpenState } from "../../../types/modalTypes";
import type { TeamType } from "../../../types/teamType";
import { getCountryCode } from "../../../utils/teamUtils";
import AttributesList from "../../attributes/components/attributesList";
import "./teamCard.css";
import ReactCountryFlag from "react-country-flag";

type TeamCardProps = {
  athletes: AthleteDataWithAttributes[];
  type: "teams" | "allstarTeams";
  team: TeamType;
  placement?: string;
  onCardClick: (next: ModalOpenState) => void;
};

function TeamCard({
  athletes,
  team,
  type,
  placement,
  onCardClick,
}: TeamCardProps) {
  const title = "user" in team ? "Your Team" : team.team;
  const code =
    "user" in team ? null : getCountryCode(team.athletes[0].info.team);
  return (
    <div className="team-card">
      <div className="name-container">
        {type === "allstarTeams" && placement}
        <p>{title} </p>
        {code && type === "teams" && (
          <ReactCountryFlag countryCode={code} svg />
        )}
      </div>
      <div className="flex">
        <div className="team-container">
          <div className="athlete-container">
            {team.athletes.map((a) => {
              const athlete = athletes.find(
                (athlete) => athlete.info.id === a.info.id,
              );
              return (
                <div
                  key={a.info.id}
                  style={{ cursor: athlete ? "pointer" : "default" }}
                  className="image-container"
                  onClick={() => {
                    if (!athlete) return;
                    onCardClick({ open: true, type: "athleteView", athlete });
                  }}
                >
                  <img
                    src={a.info.imgSm}
                    alt={`${a.info.name}'s profile picture`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="attributes-container">
          <AttributesList
            attributes={team.averageAttributes}
            attributesHeight={"35px"}
          />
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
