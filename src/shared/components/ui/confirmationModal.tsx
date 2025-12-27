import BackDrop from "../layout/backDrop";
import Modal from "../layout/modal";

type ConfirmationModalProps = {
  message: string;
  confirmText?: string;
  cancelText?: string;
  onClose: () => void;
  onConfirm: () => void;
};

function ConfirmationModal({
  message,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
}: ConfirmationModalProps) {
  return (
    <BackDrop onClose={onClose}>
      <Modal type="confirmation">
        <p>{message}</p>
        <div className="button-container">
          <button onClick={onConfirm}>{confirmText}</button>
          <button onClick={onClose}>{cancelText}</button>
        </div>
      </Modal>
    </BackDrop>
  );
}

export default ConfirmationModal;
