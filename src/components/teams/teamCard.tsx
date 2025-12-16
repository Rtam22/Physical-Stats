import type { TeamType } from "../../types/teamType";
import { getCountryCode } from "../../utils/teamUtils";
import AttributesList from "../attributes/attributesList";
import "./teamCard.css";
import ReactCountryFlag from "react-country-flag";

type TeamCardProps = {
  team: TeamType;
};

function TeamCard({ team }: TeamCardProps) {
  console.log(team);
  const title = "user" in team ? "Your Team" : team.team;
  const code =
    "user" in team ? null : getCountryCode(team.athletes[0].info.team);
  return (
    <div className="team-card">
      <div className="name-container">
        <p>{title} </p>
        {code && <ReactCountryFlag countryCode={code} svg />}
      </div>
      <div className="flex">
        <div className="team-container">
          <div className="athlete-container">
            {team.athletes.map((a) => {
              return (
                <div key={a.info.id} className="image-container">
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
