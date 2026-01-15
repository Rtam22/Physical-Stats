import "./backDrop.css";
import { motion } from "framer-motion";

type BackDropProps = {
  children: React.ReactNode;
  onClose: () => void;
};

function BackDrop({ onClose, children }: BackDropProps) {
  return (
    <motion.div
      className="back-drop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default BackDrop;
