import * as yup from "yup";

import { validationErrors } from "@constants/validationErrors";

import { validationRules } from "@utils/validation/rules";

export const editCharacterSchema = yup.object().shape({
    name: validationRules.requiredString,
    height: validationRules.numberRequired.max(250, validationErrors.maxNumber(250)),
    mass: validationRules.numberRequired.max(200, validationErrors.maxNumber(200)),
    hair_color: validationRules.requiredString,
    skin_color: validationRules.requiredString,
    eye_color: validationRules.requiredString,
    birth_year: validationRules.requiredString,
});
