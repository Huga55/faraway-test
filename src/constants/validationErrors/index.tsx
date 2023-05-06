export const validationErrors = {
    max: (length: number) => `Field length should be less than ${length}`,
    min: (length: number) => `Field length should be more than ${length}`,
    maxNumber: (value: number) => `Field value should be less than ${value}`,
    minNumber: (value: number) => `Field value should be more than ${value}`,
    required: () => "It is required field",
    numberType: () => "Field must be a number",
};
