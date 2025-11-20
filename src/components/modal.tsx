import "./modal.css";

type ModalProps = {
  type: "middle";
  children?: React.ReactNode;
  width?: string;
  height?: string;
  onClose: () => void;
};

function Modal({ type, children, width, height }: ModalProps) {
  return (
    <div
      className={`modal ${type}`}
      style={{ width, height }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}

export default Modal;
