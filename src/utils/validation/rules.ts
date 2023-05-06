import * as yup from "yup";

import { validationErrors } from "@constants/validationErrors";

export const validationRules = {
    requiredString: yup.string().required(validationErrors.required()),
    numberRequired: yup
        .number()
        .typeError(validationErrors.numberType())
        .required(validationErrors.required()),
};
