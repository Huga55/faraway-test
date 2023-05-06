import { IManageList } from "@schemas/helpers";

export const EGender = {
    MALE: "male",
    FEMALE: "female",
} as const;

export interface IEditedCharacterData {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: ValueOf<typeof EGender>;
}

export interface ICharacter extends IEditedCharacterData {
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

export type IListCharacters = IManageList<ICharacter>;
