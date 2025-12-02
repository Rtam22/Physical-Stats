import type {
  AthleteData,
  AthleteIdKey,
  AttributeValues,
} from "../../types/athleteType";
import AttributeBar from "./attributeBar";
import "./card.css";
import type { ModalType } from "../../types/modalTypes";
type CardProps = {
  id: AthleteIdKey;
  athlete: AthleteData;
  attributes: AttributeValues;
  favorites: number;
  total: number;
  mvp: boolean;
  handleClick: (athleteId: AthleteIdKey | null, type: ModalType) => void;
  hasVoted: boolean;
};

function Card({
  athlete,
  id,
  attributes,
  favorites,
  mvp,
  total,
  hasVoted,
  handleClick,
}: CardProps) {
  const hasAttributes = checkAttributes(attributes);

  function checkAttributes(attributes: AttributeValues) {
    return Object.values(attributes).some((v) => v > 0);
  }

  return (
    <div
      className="card-container"
      onClick={() => {
        hasAttributes && hasVoted
          ? handleClick(id, "athleteView")
          : handleClick(id, "setAttributes");
      }}
    >
      <div className="top-container">
        {mvp ? <p className="mvp-container">MVP</p> : null}
        <p>{athlete.info.name}</p>
        <p>*{favorites}</p>
      </div>
      <div className="athlete-card" id={id}>
        <div className="image-container">
          <img src={athlete.info.img} alt="" />
        </div>
        <div className="attribute-container">
          {hasAttributes && hasVoted ? (
            Object.entries(attributes).map(([key, value]) => {
              const title = key.charAt(0).toUpperCase() + key.slice(1);
              return <AttributeBar key={key} title={title} value={value} />;
            })
          ) : (
            <div className="attribute-message">
              {hasAttributes
                ? "Submit your scores to see how others rated them!"
                : "No stats yet. Click to submit yours!"}
            </div>
          )}
        </div>
      </div>
      <div className="bottom-container">
        {hasAttributes && hasVoted && <p>Total: {total}</p>}
      </div>
    </div>
  );
}
export default Card;
