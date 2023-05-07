import { AxiosPromise } from "axios";

import Request from "@services/Request";
import { paths } from "@services/paths";

import { ICharacter, IListCharacters } from "@schemas/characters";

import { IGetAllCharactersDto } from "./dto/get-all-characters-dto";

const url = paths.characters;

class CharactersAPI {
    getAllCharacters(dto: IGetAllCharactersDto): AxiosPromise<IListCharacters> {
        return Request.get(`${url}/`, { params: dto });
    }

    getCharacterById(id: string): AxiosPromise<ICharacter> {
        return Request.get(`${url}/${id}`);
    }
}

export default new CharactersAPI();
