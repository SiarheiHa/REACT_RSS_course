import { Character, Endpoint, ResponseModel, Sorting } from 'types/types';
import { runInThisContext } from 'vm';
import { apiBase, apiKey } from './constants';

export default class Api {
  async getResource(url: string): Promise<ResponseModel> {
    const res = await fetch(`${apiBase}${url}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getCharacters(value: string): Promise<Character[]> {
    const data = await this.getResource(Endpoint.character + `?name=/${value}/i`);
    return data.docs;
  }

  getPaginatedData(
    page: string,
    limit: string,
    sorting: string,
    searchValue: string
  ): Promise<ResponseModel> {
    console.log('request');
    let queriString = `?limit=${limit}&page=${page}`;
    if (searchValue) {
      queriString += `&name=/${searchValue}/i`;
    }
    if (sorting !== Sorting.DEFAULT) {
      queriString += `&sort=name:${sorting}`;
    }
    return this.getResource(Endpoint.character + queriString);
  }
}
