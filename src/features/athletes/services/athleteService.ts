import { athleteList, initialAttributes } from "../../../data/athleteData";
import type {
  AthleteDataWithAttributes,
  AttributeSubmission,
} from "../../../types/athleteType";
import {
  getAttributesFromSubmissions,
  getValuesForAttributes,
} from "../../../utils/attributeUtils";

function createBaseAthletes(): AthleteDataWithAttributes[] {
  return athleteList.map((a) => ({
    ...a,
    attributes: initialAttributes,
    favorite: 0,
    mvp: false,
    total: 0,
    mvpCount: 0,
    ranking: null,
  }));
}
function buildAthletes(submissions: AttributeSubmission[]) {
  const baseAthletes = createBaseAthletes();
  const updatedAthletes = getAttributesFromSubmissions(
    submissions,
    baseAthletes
  );
  const finalAthletes = getValuesForAttributes(updatedAthletes);
  return finalAthletes;
}

export const athleteService = {
  buildAthletes,
};
