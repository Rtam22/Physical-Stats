import type { AthleteData } from "../data/athleteType";
import "./card.css";

type CardProps = {
  id: string;
  item: AthleteData;
};

function Card({ item, id }: CardProps) {
  return <div id={id}>{item.info.name}</div>;
}
export default Card;
