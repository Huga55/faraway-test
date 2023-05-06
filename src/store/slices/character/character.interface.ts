import { ICharacter } from "@schemas/characters";
import { IManageList } from "@schemas/helpers";

export interface ICharacterSlice {
    characters: IManageList<ICharacter> | null;
    characterInfo: ICharacter | null;
    isCharactersLoading: boolean;
    isCharacterInfoLoading: boolean;
}
