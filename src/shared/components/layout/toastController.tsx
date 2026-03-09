import "./toastController.css";
import type { ToastType } from "../../context/ToastContext";
import Toast from "../ui/toast";
import { AnimatePresence } from "framer-motion";

type ToastControllerProps = {
  toasts: ToastType[];
  removeToast: (id: string) => void;
};

function ToastController({ toasts, removeToast }: ToastControllerProps) {
  return (
    <div className="toast-notification-container">
      <AnimatePresence>
        {toasts.map((toast) => {
          return (
            <Toast key={toast.id} toast={toast} removeToast={removeToast} />
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default ToastController;
