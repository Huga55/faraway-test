import { RootState } from "@store/index";

export const setlectCharacters = (state: RootState) => state.character.characters;
export const setlectCharacterInfo = (state: RootState) => state.character.characterInfo;
export const setlectIsCharactersLoading = (state: RootState) => state.character.isCharactersLoading;
export const selectIsCharacterInfoLoading = (state: RootState) =>
    state.character.isCharacterInfoLoading;
