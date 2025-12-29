import type { AthleteDataWithAttributes } from "../../../types/athleteType";
import "./athleteCard.css";
import type { ModalOpenState } from "../../../types/modalTypes";
import ReactCountryFlag from "react-country-flag";
import { getCountryCode } from "../../../utils/teamUtils";
import AttributesList from "../../attributes/components/attributesList";
import type { AttributeValues } from "../../../types/attributeTypes";

type AthleteCard = {
  type: "card";
  athlete: AthleteDataWithAttributes;
  handleClick: (next: ModalOpenState) => void;
  hasVoted: boolean;
};

type AthleteViewCard = {
  type: "view";
  athlete: AthleteDataWithAttributes;
};

type CardProps = AthleteCard | AthleteViewCard;

function AthleteCard(props: CardProps) {
  const { athlete } = props;
  const hasAttributes = checkAttributes(props.athlete.attributes);
  const countryCode = getCountryCode(props.athlete.info.team);
  function checkAttributes(attributes: AttributeValues) {
    return Object.values(attributes).some((v) => v > 0);
  }
  const revealAttributes =
    (hasAttributes && props.type === "card" && props.hasVoted) ||
    props.type === "view";
  const revealTotal = hasAttributes && props.type === "card" && props.hasVoted;

  const onClick =
    props.type === "card"
      ? () => {
          hasAttributes && props.hasVoted
            ? props.handleClick({
                open: true,
                type: "athleteView",
                athlete,
              })
            : props.handleClick({
                open: true,
                type: "setAttributes",
                athlete,
              });
        }
      : undefined;

  return (
    <div className="card-container" onClick={onClick}>
      <div className="top-container">
        {athlete.mvp ? <p className="mvp-container">MVP</p> : null}
        <div className="flex">
          {countryCode && <ReactCountryFlag countryCode={countryCode} svg />}
          <p>{athlete.info.name}</p>
        </div>
        <p>⭐{athlete.favorite}</p>
      </div>
      <div className="athlete-card" id={athlete.info.id}>
        <div className="image-container">
          <img src={athlete.info.imgSm} alt="" />
        </div>
        <div className="attributes-container">
          {revealAttributes ? (
            <AttributesList attributes={athlete.attributes} />
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
        {revealTotal && <p>Total: {athlete.total}</p>}
      </div>
    </div>
  );
}
export default AthleteCard;
