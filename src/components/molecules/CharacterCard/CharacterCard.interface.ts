import { ICharacter } from "@schemas/characters";

export interface ICharacterCard {
    data: ICharacter;
    className?: string;
    onGetInfo(id: string): void;
}
