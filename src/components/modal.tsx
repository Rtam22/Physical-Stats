import "./modal.css";

type ModalProps = {
  type: "middle";
  children?: React.ReactNode;
  onClose: () => void;
};

function Modal({ type, children }: ModalProps) {
  return <div className={`modal ${type}`}>{children}</div>;
}

export default Modal;
