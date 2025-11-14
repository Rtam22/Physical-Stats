import type { AthleteData, AttributeValues } from "../data/athleteType";
import AttributeBar from "./attributeBar";
import "./card.css";
import type { AthleteId } from "../data/athleteType";
type CardProps = {
  id: string;
  athlete: AthleteData;
  attributes: AttributeValues;
  favorites: number;
  handleOnClick: (AthleteId: AthleteId) => void;
};

function Card({
  athlete,
  id,
  attributes,
  favorites,
  handleOnClick,
}: CardProps) {
  const hasAttributes = checkAttributes(attributes);

  function checkAttributes(attributes: AttributeValues) {
    return Object.values(attributes).some((v) => v > 0);
  }

  return (
    <div className="card-container">
      <div className="top-container">
        <p>{athlete.info.name}</p>
        <p>*{favorites}</p>
      </div>
      <div className="athlete-card" id={id}>
        <div className="image-container">
          <img src={athlete.info.img} alt="" />
        </div>
        <div className="attribute-container">
          {hasAttributes ? (
            Object.entries(attributes).map(([key, value]) => {
              const title = key.charAt(0).toUpperCase() + key.slice(1);
              return <AttributeBar key={key} title={title} value={value} />;
            })
          ) : (
            <div
              className="attribute-message"
              onClick={() => handleOnClick(id)}
            >
              No stats yet. Click to submit yours!
            </div>
          )}
        </div>
      </div>{" "}
    </div>
  );
}
export default Card;
