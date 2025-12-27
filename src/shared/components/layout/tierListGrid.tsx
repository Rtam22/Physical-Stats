import { motion } from "framer-motion";
import { ranksKey } from "../../../data/attributeKey";
import type { AthleteDataWithAttributes } from "../../../types/athleteType";
import type { ModalOpenState } from "../../../types/modalTypes";
import "./tierListGrid.css";

type TierListGridProps = {
  athletes: AthleteDataWithAttributes[];
  onCardClick: (next: ModalOpenState) => void;
};

function TierListGrid({ athletes, onCardClick }: TierListGridProps) {
  return (
    <div className="tierlist-grid">
      {ranksKey.map((key) => {
        return (
          <div key={key.key} className="tier-row">
            <div className="key-cell" style={{ backgroundColor: key.color }}>
              {key.key}
            </div>
            <motion.div
              className="athletes-cell"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {athletes.map((athlete) => {
                return athlete.ranking === key.key ? (
                  <motion.div
                    onClick={() =>
                      onCardClick({ open: true, type: "athleteView", athlete })
                    }
                    key={athlete.info.id}
                    className="image-container"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <img src={athlete.info.img} />
                  </motion.div>
                ) : null;
              })}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default TierListGrid;
