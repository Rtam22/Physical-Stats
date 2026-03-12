export type ToastVariant = "error";

export type ToastType = {
  id: string;
  type: ToastVariant;
  message: string;
  timer: number;
};
