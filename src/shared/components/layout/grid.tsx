import React from "react";
import "./grid.css";
import { motion, AnimatePresence } from "framer-motion";

type GridProps = {
  items: React.ReactElement<{ id: string }>[];
  cellGap?: number;
  cellMinWidth?: string;
  cellMaxWidth?: string;
  cellHeight?: string;
  width?: string;
};

function Grid({
  items,
  cellGap = 40,
  cellHeight = "auto",
  cellMinWidth = "1fr",
  cellMaxWidth = "1fr",
  width = "100%",
}: GridProps) {
  return (
    <div
      className="grid"
      style={{
        gap: cellGap,
        gridAutoRows: cellHeight,
        width: width,
        gridTemplateColumns: `repeat(auto-fit, minmax(${cellMinWidth}, ${cellMaxWidth}))`,
      }}
    >
      <AnimatePresence>
        {items.map((item) => {
          return (
            <motion.div
              key={item.key}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 0.5, ease: "easeOut" } }}
            >
              {item}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default Grid;
