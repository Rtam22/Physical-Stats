import { useState } from "react";
import type { ModalOpenState, ModalState } from "../../types/modalTypes";

function useModalController() {
  const [state, setState] = useState<ModalState>({ open: false });

  function open(next: ModalOpenState) {
    setState(next);
  }

  function close() {
    setState({ open: false });
  }
  return { state, open, close };
}

export default useModalController;
