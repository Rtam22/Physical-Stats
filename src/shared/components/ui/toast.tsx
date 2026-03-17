import { useEffect, useState } from "react";
import "./toast.css";
import { capitalize } from "../../../utils/textUtils";
import { motion } from "framer-motion";
import type { ToastType } from "../../../types/toastTypes";
type ToastProps = {
  toast: ToastType;
  removeToast: (id: string) => void;
};
function Toast({ toast, removeToast }: ToastProps) {
  const [transition, setTransition] = useState<boolean>(false);
  const timer = toast.timer ? toast.timer : 10000;

  useEffect(() => {
    setTransition(true);
    const timeout = setTimeout(() => {
      removeToast(toast.id);
    }, timer);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className={`toast-notification ${toast.type}`}
      layout
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      <div className="contents">
        <div className="icon-container">0</div>
        <div className="content-container">
          <h4>{capitalize(toast.type)}</h4>
          <p>{capitalize(toast.message)}</p>
        </div>
        <div className="delete-container">
          <button
            className="delete-button"
            onClick={() => removeToast(toast.id)}
          >
            x
          </button>
        </div>
      </div>
      <div className="loading-bar">
        <div
          className={`progress-bar ${toast.type} ${transition && "active"}`}
          style={{ transition: `width ${timer}ms linear` }}
        ></div>
      </div>
    </motion.div>
  );
}

export default Toast;
