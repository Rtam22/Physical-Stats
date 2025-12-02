import type { AthleteDataWithAttributes } from "../../types/athleteType";
import "./athleteView.css";
import AttributeBar from "./attributeBar";

type AtheleteViewProps = {
  athlete: AthleteDataWithAttributes;
};

function AthleteView({ athlete }: AtheleteViewProps) {
  return (
    <div className="athlete-view">
      <div className="image-container">
        <img src={athlete.info.img} alt={`Portrait of ${athlete.info.name}`} />
      </div>
      <div className="information-container">
        <span>
          <h2>{athlete.info.name}</h2>
          <h2>*{athlete.favorite}</h2>{" "}
        </span>
        <p></p>
        <div className="attribute-container">
          {Object.entries(athlete.attributes).map(([key, value]) => {
            const title = key.charAt(0).toUpperCase() + key.slice(1);
            return <AttributeBar key={key} title={title} value={value} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AthleteView;
