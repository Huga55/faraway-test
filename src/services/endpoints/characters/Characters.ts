import { AxiosPromise } from "axios";

import Request from "@services/Request";
import { paths } from "@services/paths";

import { ICharacter, IListCharacters } from "@schemas/characters";

const url = paths.characters;

class CharactersAPI {
    getAllCharacters(page: number): AxiosPromise<IListCharacters> {
        return Request.get(`${url}/`, { params: { page } });
    }

    getCharacterById(id: string): AxiosPromise<ICharacter> {
        return Request.get(`${url}/${id}`);
    }
}

export default new CharactersAPI();
