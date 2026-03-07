import "./toastNotification.css";
import type { ToastType } from "../../context/ToastContext";
import Toast from "./toast";

type ToastControllerProps = {
  toasts: ToastType[];
  removeToast: (id: string) => void;
};

function ToastController({ toasts, removeToast }: ToastControllerProps) {
  return (
    <div className="toast-notification">
      {toasts.map((toast) => {
        return <Toast toast={toast} removeToast={removeToast} />;
      })}
    </div>
  );
}

export default ToastController;
