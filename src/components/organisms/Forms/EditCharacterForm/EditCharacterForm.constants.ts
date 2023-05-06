import { IRadio } from "@molecules/Radios/Radios.interface";

import { EGender } from "@schemas/characters";

export const editCharactersGenders: IRadio[] = [
    {
        label: "Male",
        value: EGender.MALE,
    },
    {
        label: "Female",
        value: EGender.FEMALE,
    },
];
