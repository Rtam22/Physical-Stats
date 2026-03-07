import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type ToastContextType = {
  toasts: ToastType[];
  addToast: (toast: ToastType) => void;
  removeToast: (id: string) => void;
};

export type ToastType = {
  id: string;
  type: "error";
  message: string;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  function addToast(toast: ToastType) {
    setToasts((prev) => [...prev, toast]);
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
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
