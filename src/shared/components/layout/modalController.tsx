import type { ModalConfig, ModalState } from "../../../types/modalTypes";
import BackDrop from "./backDrop";

import "./modalController.css";

type ModalControllerProps = {
  state: ModalState;
  modals: ModalConfig[];
  onClose: () => void;
};

function ModalController({ state, modals, onClose }: ModalControllerProps) {
  if (!state.open) return null;
  const config = modals.find((modal) => modal.id === state.type);
  if (!config) return null;
  return (
    <>
      <BackDrop onClose={onClose}>{config?.render()}</BackDrop>
    </>
  );
}

export default ModalController;
