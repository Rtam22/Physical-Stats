import "./toastController.css";
import Toast from "../ui/toast";
import { AnimatePresence } from "framer-motion";
import type { ToastType } from "../../../types/toastTypes";

export type ToastLocationType = "top" | "bottom";

type ToastControllerProps = {
  toasts: ToastType[];
  toastLocation?: ToastLocationType;
  removeToast: (id: string) => void;
};

function ToastController({
  toasts,
  toastLocation = "bottom",
  removeToast,
}: ToastControllerProps) {
  return (
    <div className={`toast-notification-container ${toastLocation}`}>
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
