import BackDrop from "../layout/backDrop";
import Modal from "../layout/modal";
import "./confirmationModal.css";
type ConfirmationModalProps = {
  title: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onClose: () => void;
  onConfirm: () => void;
};

function ConfirmationModal({
  title,
  message,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
}: ConfirmationModalProps) {
  return (
    <BackDrop onClose={onClose}>
      <Modal type="confirmation">
        <div className="content-container">
          <h3>{title}</h3>
          <p>{message}</p>
        </div>

        <div className="button-container">
          <button onClick={onConfirm}>{confirmText}</button>
          <button onClick={onClose}>{cancelText}</button>
        </div>
      </Modal>
    </BackDrop>
  );
}

export default ConfirmationModal;
