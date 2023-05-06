import { ICharacter, IListCharacters } from "@schemas/characters";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ICharacterSlice } from "./character.interface";

const initialState: ICharacterSlice = {
    characterInfo: null,
    characters: null,
    isCharacterInfoLoading: false,
    isCharactersLoading: false,
};

const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
        setCharacters(state, action: PayloadAction<IListCharacters>) {
            state.characters = action.payload;
        },
        setCharacterInfo(state, action: PayloadAction<ICharacter>) {
            state.characterInfo = action.payload;
        },
        setIsCharactersLoading(state, action: PayloadAction<boolean>) {
            state.isCharactersLoading = action.payload;
        },
        setIsCharacterInfoLoading(state, action: PayloadAction<boolean>) {
            state.isCharacterInfoLoading = action.payload;
        },
        clearCharacterInfo(state) {
            state.characterInfo = null;
        },
    },
});

export const {
    clearCharacterInfo,
    setCharacterInfo,
    setCharacters,
    setIsCharacterInfoLoading,
    setIsCharactersLoading,
} = characterSlice.actions;

export default characterSlice.reducer;
