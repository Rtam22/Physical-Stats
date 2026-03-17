import "./attributeBar.css";
import { motion } from "framer-motion";

type AttributeBarProps = {
  title: string;
  value: number;
  height?: string;
};

function AttributeBar({ title, value, height }: AttributeBarProps) {
  const percent = value * 10;
  const duration = 0.3 + (percent / 100) * 0.7;

  return (
    <div className="attribute" style={{ height }}>
      <div className="title-container">{title}</div>
      <div className="progress-bar">
        <motion.div
          className="progress"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{
            duration,
            ease: "easeOut",
          }}
        />
      </div>
      <div className="progress-value">{String(value)}</div>
    </div>
  );
}

export default AttributeBar;
