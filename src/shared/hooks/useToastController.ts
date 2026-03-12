import { useState } from "react";
import type { ToastType, ToastVariant } from "../../types/toastTypes";

export function useToastController() {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  function addToast(type: ToastVariant, message: string, timer = 10000) {
    setToasts((prev) => [
      ...prev,
      { id: crypto.randomUUID(), type, message, timer },
    ]);
  }

  function removeToast(id: string) {
    setToasts((prev) => prev.filter((items) => items.id !== id));
  }

  return { toasts, addToast, removeToast };
}
