import type { AthleteData } from "../data/athleteType";
import "./card.css";

type CardProps = {
  id: string;
  item: AthleteData;
};

function Card({ item, id }: CardProps) {
  return (
    <div className="athlete-card" id={id}>
      <div className="image-container">
        <img src={item.info.img} alt="" />
      </div>
      <div className="attribute-container"></div>
    </div>
  );
}
export default Card;
