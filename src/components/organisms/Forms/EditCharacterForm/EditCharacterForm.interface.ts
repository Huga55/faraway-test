import { ICharacter } from "@schemas/characters";

export interface IEditCharacterForm {
    onCancel(): void;
    onApply(): void;
    data: ICharacter;
}
