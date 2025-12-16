import { useState } from "react";
import type { ModalState, ModalType } from "../types/modalTypes";
import type { AthleteDataWithAttributes } from "../types/athleteType";

function useModalController() {
  const [modal, setModal] = useState<ModalState>();

  function openModal(type: ModalType, athlete?: AthleteDataWithAttributes) {
    setModal({ open: true, type: type, athlete });
  }

  function closeModal() {
    setModal({ open: false });
  }
  return { modal, openModal, closeModal };
}

export default useModalController;
