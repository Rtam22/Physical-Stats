import type { AthleteData, AttributeValues } from "../data/athleteType";
import AttributeBar from "./attributeBar";
import "./card.css";

type CardProps = {
  id: string;
  athlete: AthleteData;
  attributes: AttributeValues;
  favorites: number;
};

function Card({ athlete, id, attributes, favorites }: CardProps) {
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
          {Object.entries(attributes).map(([key, value]) => {
            const title = key.charAt(0).toUpperCase() + key.slice(1);
            return <AttributeBar key={key} title={title} value={value} />;
          })}
        </div>
      </div>{" "}
    </div>
  );
}
export default Card;
