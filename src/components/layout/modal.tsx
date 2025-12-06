import "./modal.css";

type ModalProps = {
  type: "middle";
  children?: React.ReactNode;
  width?: string;
  height?: string;
  onClose?: () => void;
};

function Modal({ type, children, width, height, onClose }: ModalProps) {
  return (
    <div
      className={`modal ${type}`}
      style={{ width, height }}
      onClick={(e) => e.stopPropagation()}
    >
      {onClose && (
        <div className="close-container">
          <button onClick={onClose}>X</button>
        </div>
      )}

      <div className="modal-content">{children}</div>
    </div>
  );
}

export default Modal;
