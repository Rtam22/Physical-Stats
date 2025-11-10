import React from "react";
import "./grid.css";
import { motion, AnimatePresence } from "framer-motion";

type GridProps = {
  columns: number;
  items: React.ReactElement<{ id: string }>[];
  cellGap?: number;
  cellWidth?: number;
  cellHeight?: number;
};

function Grid({ columns, items, cellGap, cellHeight, cellWidth }: GridProps) {
  const cellW = cellWidth ? cellWidth : 100;
  const cellH = cellHeight ? cellHeight : 100;
  const gap = cellGap ? cellGap : 8;

  function calculateLocation(index: number) {
    const x = index % columns;
    const y = Math.floor(index / columns);
    return {
      left: x * (cellW + gap),
      top: y * (cellH + gap),
      width: cellW,
      height: cellH,
    };
  }

  return (
    <div className="grid">
      <AnimatePresence>
        {items.map((item, index) => {
          const styles = calculateLocation(index);
          const id = item.props.id;
          return (
            <motion.div
              key={id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
              style={{ position: "absolute", ...styles }}
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
