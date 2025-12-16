import type { AthleteDataWithAttributes } from "./athleteType";

export type ModalType = "setAttributes" | "athleteView";

export type ModalState =
  | {
      open: false;
    }
  | { open: true; type: ModalType; athlete?: AthleteDataWithAttributes };
