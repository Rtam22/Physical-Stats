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
  loading?: string | null;
};

type AthleteViewCard = {
  type: "view";
  athlete: AthleteDataWithAttributes;
};

type CardProps = AthleteCard | AthleteViewCard;

function AthleteCard(props: CardProps) {
  const { athlete } = props;
  const hasAttributes = checkAttributes(props.athlete.attributes);
  console.log(hasAttributes);
  const countryCode = getCountryCode(props.athlete.info.team);
  function checkAttributes(attributes: AttributeValues) {
    return Object.values(attributes).some((v) => v > 0);
  }

  const revealAttributes =
    (props.type === "card" && props.hasVoted) || props.type === "view";
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
    <div className="card-container">
      <div className="top-container">
        {athlete.mvp ? <p className="mvp-container">MVP</p> : null}
        <div className="flex">
          {countryCode && <ReactCountryFlag countryCode={countryCode} svg />}
          <p>{athlete.info.name}</p>
        </div>
        <p>⭐{athlete.favorite}</p>
      </div>
      <div className="athlete-card" id={athlete.info.id} onClick={onClick}>
        <div className="image-container">
          <img src={athlete.info.imgSm} alt="Athlete profile picture" />
        </div>
        <div className="attributes-container">
          {props.type === "card" && props.loading === props.athlete.info.id ? (
            <div className="loading-container">loading</div>
          ) : revealAttributes ? (
            <AttributesList attributes={athlete.attributes} />
          ) : (
            <div className="attribute-message">
              "Submit your scores to see how others rated them!"
            </div>
          )}
        </div>
      </div>
      <div className="bottom-container">
        <p>{revealTotal && `Total: ${athlete.total}`}</p>
      </div>
    </div>
  );
}
export default AthleteCard;
