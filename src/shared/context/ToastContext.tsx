import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type ToastContextType = {
  toasts: ToastType[];
  addToast: (type: ToastVariant, message: string) => void;
  removeToast: (id: string) => void;
};

export type ToastVariant = "error";

export type ToastType = {
  id: string;
  type: ToastVariant;
  message: string;
  timer?: number;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  function addToast(type: ToastVariant, message: string) {
    setToasts((prev) => [...prev, { id: crypto.randomUUID(), type, message }]);
  }

  function removeToast(id: string) {
    setToasts((prev) => prev.filter((items) => items.id !== id));
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToastContext must be used within a Provider");
  }
  return context;
};
