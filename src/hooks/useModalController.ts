import { useState } from "react";
import type { ModalState, ModalType } from "../types/modalTypes";
import type { AthleteDataWithAttributes } from "../types/athleteType";

function useModalController() {
  const [state, setState] = useState<ModalState>();

  function open(type: ModalType, athlete?: AthleteDataWithAttributes) {
    setState({ open: true, type: type, athlete });
  }

  function close() {
    setState({ open: false });
  }
  return { state, open, close };
}

export default useModalController;
