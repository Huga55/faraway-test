import {
    selectIsCharacterInfoLoading,
    setlectCharacterInfo,
    setlectCharacters,
    setlectIsCharactersLoading,
} from "../character.selectors";
import {
    characterCardMock,
    characterStateDefaultMock,
    characterStateMock,
    charactersMockList,
} from "./characterSelectors.mock";

describe("setlectCharacters", () => {
    test("Correct state", () => {
        expect(
            setlectCharacters({
                character: { ...characterStateMock, characters: charactersMockList },
            }),
        ).toEqual(charactersMockList);
    });

    test("Correct state default", () => {
        expect(
            setlectCharacters({
                character: characterStateDefaultMock,
            }),
        ).toBe(null);
    });
});

describe("setlectCharacterInfo", () => {
    test("Correct state", () => {
        expect(
            setlectCharacterInfo({
                character: { ...characterStateMock, characterInfo: characterCardMock[0] },
            }),
        ).toEqual(characterCardMock[0]);
    });

    test("Correct state null", () => {
        expect(
            setlectCharacterInfo({
                character: characterStateDefaultMock,
            }),
        ).toBe(null);
    });
});

describe("setlectIsCharactersLoading", () => {
    test("Correct state", () => {
        expect(
            setlectIsCharactersLoading({
                character: { ...characterStateMock, isCharactersLoading: true },
            }),
        ).toBe(true);
    });

    test("Correct state default", () => {
        expect(
            setlectIsCharactersLoading({
                character: characterStateDefaultMock,
            }),
        ).toBe(false);
    });
});

describe("selectIsCharacterInfoLoading", () => {
    test("Correct state", () => {
        expect(
            selectIsCharacterInfoLoading({
                character: { ...characterStateMock, isCharacterInfoLoading: true },
            }),
        ).toBe(true);
    });

    test("Correct state default", () => {
        expect(
            selectIsCharacterInfoLoading({
                character: characterStateDefaultMock,
            }),
        ).toBe(false);
    });
});
