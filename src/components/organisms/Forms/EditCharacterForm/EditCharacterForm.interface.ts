import { IEditedCharacterData } from "@schemas/characters";

export interface IEditCharacterForm {
    onCancel(): void;
    onApply(data: IEditedCharacterData): void;
    data: IEditedCharacterData;
}

export type IEditCharacterFormFields = IEditedCharacterData;
