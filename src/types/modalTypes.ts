import type { ReactNode } from "react";
import type { AthleteDataWithAttributes } from "./athleteType";

export type ModalType = "setAttributes" | "athleteView" | "confirmation";

export type ModalState =
  | {
      open: false;
    }
  | { open: true; type: "setAttributes"; athlete: AthleteDataWithAttributes }
  | { open: true; type: "athleteView"; athlete: AthleteDataWithAttributes }
  | { open: true; type: "confirmation" };

export type ModalConfig = {
  id: ModalType;
  backDrop: boolean;
  render: () => ReactNode;
};

export type ModalOpenState = Extract<ModalState, { open: true }>;
