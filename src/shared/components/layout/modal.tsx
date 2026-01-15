import "./modal.css";
import { motion } from "framer-motion";

type ModalProps = {
  type: "middle" | "confirmation";
  children?: React.ReactNode;
  width?: string;
  height?: string;
  onClose?: () => void;
};

function Modal({ type, children, width, height, onClose }: ModalProps) {
  return (
    <motion.div
      className="modal-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    >
      <motion.div
        className={`modal ${type}`}
        style={{ width, height }}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        {onClose && (
          <div className="close-container">
            <button onClick={onClose}>X</button>
          </div>
        )}

        <div className="modal-content">{children}</div>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
