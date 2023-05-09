import { ICharacter, IListCharacters } from "@schemas/characters";

import { ICharacterSlice } from "../character.interface";

export const characterCardMock: ICharacter[] = [...Array(10)].map(() => ({
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    homeworld: "https://swapi.dev/api/planets/1/",
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    url: "https://swapi.dev/api/people/1/",
}));

export const charactersMockList: IListCharacters = {
    count: 10,
    next: "",
    previous: "",
    results: characterCardMock,
};

export const characterStateMock: ICharacterSlice = {
    characterInfo: characterCardMock[0],
    characters: charactersMockList,
    isCharacterInfoLoading: false,
    isCharactersLoading: false,
};

export const characterStateDefaultMock: ICharacterSlice = {
    characterInfo: null,
    characters: null,
    isCharacterInfoLoading: false,
    isCharactersLoading: false,
};
