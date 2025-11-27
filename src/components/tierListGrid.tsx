import { rankingKey } from "../data/attributeKey";
import type { AthleteDataWithAttributes } from "../types/athleteType";
import "./tierListGrid.css";

type TierListGridProps = {
  athletes: AthleteDataWithAttributes[];
};

function TierListGrid({ athletes }: TierListGridProps) {
  return (
    <div className="tierlist-grid">
      {rankingKey.map((key) => {
        return (
          <div key={key} className="tier-row">
            <div className="key-cell">{key}</div>
            <div className="athletes-cell">
              {athletes.map((athlete) => {
                return athlete.ranking === key ? (
                  <div key={athlete.info.id} className="image-container">
                    <img src={athlete.info.img} />
                  </div>
                ) : null;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TierListGrid;
