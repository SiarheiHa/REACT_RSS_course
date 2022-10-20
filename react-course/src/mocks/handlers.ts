import { apiBase } from 'api/constants';
import { rest } from 'msw';
import { Endpoint } from 'types/types';
import { testEmptyResponse, testResponse } from './testData';

export const handlers = [
  rest.get(`${apiBase}${Endpoint.character}`, (req, res, ctx) => {
    const name = req.url.searchParams.get('name');
    switch (name) {
      case '/invalidPath/i':
        return res();
      case '/fakeTestName/i':
        return res(ctx.status(200), ctx.json(testEmptyResponse));
      default:
        return res(ctx.status(200), ctx.json(testResponse));
    }
  }),
];
