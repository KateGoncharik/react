import { HttpResponse, http } from 'msw';

import { charactersMock, characterMock } from '@/___tests___/mocks/mocks';

export const handlers = [
  http.get(/\/character$/, () => {
    return HttpResponse.json(charactersMock, {
      headers: { 'x-total-count': '3' },
      status: 200,
    });
  }),
  http.get(/\/character\/8/, () => {
    return HttpResponse.json(characterMock, { headers: {}, status: 200 });
  }),
  http.get(/rickandmortyapi\.com/, () => {
    console.error('wrong way');

    return new HttpResponse(null, { status: 404 });
  }),
];
