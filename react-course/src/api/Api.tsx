import { Character, Endpoint, ResponseModel } from 'types/types';
import { apiBase, apiKey } from './constants';

export default class Api {
  requestCounter = 0;

  async getResource(url: string): Promise<ResponseModel> {
    console.log(++this.requestCounter);
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

  async getAllCharacters(): Promise<Character[]> {
    const data = await this.getResource(Endpoint.character + '?limit=10');
    return data.docs;
  }

  async getCharacterBySearch(value: string): Promise<Character[]> {
    const data = await this.getResource(Endpoint.character + `?name=/${value}/i`);
    return data.docs;
  }
}
