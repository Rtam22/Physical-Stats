import { useEffect } from "react";
import type { ToastType } from "../../context/ToastContext";
import "./toast.css";

type ToastProps = {
  toast: ToastType;
  removeToast: (id: string) => void;
};
function Toast({ toast, removeToast }: ToastProps) {
  useEffect(() => {
    setTimeout(() => {
      removeToast(toast.id);
    }, 500);
  }, []);

  return <div>{toast.message}</div>;
}

export default Toast;
