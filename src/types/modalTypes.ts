import type { AthleteDataWithAttributes } from "./athleteType";

export type ModalType = "setAttributes" | "athleteView";

export type ModalState =
  | {
      type: "setAttributes";
      athlete: AthleteDataWithAttributes;
    }
  | {
      type: "athleteView";
      athlete: AthleteDataWithAttributes;
    };
