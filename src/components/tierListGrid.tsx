import { ranksKey } from "../data/attributeKey";
import type { AthleteDataWithAttributes } from "../types/athleteType";
import "./tierListGrid.css";

type TierListGridProps = {
  athletes: AthleteDataWithAttributes[];
};

function TierListGrid({ athletes }: TierListGridProps) {
  return (
    <div className="tierlist-grid">
      {ranksKey.map((key) => {
        return (
          <div key={key.key} className="tier-row">
            <div className="key-cell" style={{ backgroundColor: key.color }}>
              {key.key}
            </div>
            <div className="athletes-cell">
              {athletes.map((athlete) => {
                return athlete.ranking === key.key ? (
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
