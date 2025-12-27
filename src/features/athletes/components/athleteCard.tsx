import type {
  AthleteDataWithAttributes,
  AthleteIdKey,
} from "../../../types/athleteType";
import "./athleteCard.css";
import type { ModalOpenState } from "../../../types/modalTypes";
import ReactCountryFlag from "react-country-flag";
import { getCountryCode } from "../../../utils/teamUtils";
import AttributesList from "../../attributes/components/attributesList";
import type { AttributeValues } from "../../../types/attributeTypes";

type CardProps = {
  id: AthleteIdKey;
  athlete: AthleteDataWithAttributes;
  attributes: AttributeValues;
  favorites: number;
  total: number;
  mvp: boolean;
  handleClick: (next: ModalOpenState) => void;
  hasVoted: boolean;
};

function AthleteCard({
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
  const countryCode = getCountryCode(athlete.info.team);
  function checkAttributes(attributes: AttributeValues) {
    return Object.values(attributes).some((v) => v > 0);
  }

  return (
    <div
      className="card-container"
      onClick={() => {
        hasAttributes && hasVoted
          ? handleClick({ open: true, type: "athleteView", athlete })
          : handleClick({ open: true, type: "setAttributes", athlete });
      }}
    >
      <div className="top-container">
        {mvp ? <p className="mvp-container">MVP</p> : null}
        <div className="flex">
          {countryCode && <ReactCountryFlag countryCode={countryCode} svg />}
          <p>{athlete.info.name}</p>
        </div>
        <p>*{favorites}</p>
      </div>
      <div className="athlete-card" id={id}>
        <div className="image-container">
          <img src={athlete.info.imgSm} alt="" />
        </div>
        <div className="attributes-container">
          {hasAttributes && hasVoted ? (
            <AttributesList attributes={attributes} />
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
export default AthleteCard;
