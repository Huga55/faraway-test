import Characters from "@services/endpoints/characters/Characters";
import { IGetAllCharactersDto } from "@services/endpoints/characters/dto/get-all-characters-dto";

import { AppThunk } from "@store/index";

import {
    setCharacterInfo,
    setCharacters,
    setIsCharacterInfoLoading,
    setIsCharactersLoading,
} from "./character.slice";

export const getCharacters = (dto: IGetAllCharactersDto): AppThunk => async (dispatch) => {
    dispatch(setIsCharactersLoading(true));

    try {
        const characters = await Characters.getAllCharacters(dto);

        dispatch(setCharacters(characters.data));
    } catch (e) {
        console.error(e);
    } finally {
        dispatch(setIsCharactersLoading(false));
    }
};

export const getCharacterInfo = (id: string): AppThunk => async (dispatch) => {
    dispatch(setIsCharacterInfoLoading(true));

    try {
        const characterInfo = await Characters.getCharacterById(id);

        dispatch(setCharacterInfo(characterInfo.data));
    } catch (e) {
        console.error(e);
    } finally {
        dispatch(setIsCharacterInfoLoading(false));
    }
};
