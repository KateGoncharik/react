import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character } from '@/types/types';
import { BASE_URL } from '@/lib/config';
import { HYDRATE } from 'next-redux-wrapper';

type ApiResponse = {
  characters: Character[];
  totalCount: number;
};

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    fetchCharacters: builder.query<ApiResponse, { name?: string; page?: number; limit?: number }>({
      query: ({ name, page, limit }) => {
        const nameQuery = name ? `${name}` : '';
        const pageQuery = page ? `&_page=${page}` : '';
        const limitQuery = limit ? `&_limit=${limit}` : '';
        return `?q=${nameQuery}${pageQuery}${limitQuery}`;
      },
      transformResponse: (response: Character[], meta) => {
        const total =
          meta && meta.response ? Number(meta.response.headers.get('x-total-count')) : 0;

        return { characters: response, totalCount: total };
      },
    }),
    fetchCharacterById: builder.query<Character, { id?: string }>({
      query: ({ id }) => {
        return `/${id}`;
      },
    }),
  }),
});

export const { useFetchCharactersQuery, useFetchCharacterByIdQuery } = charactersApi;

export const {
  endpoints: { fetchCharacters },
} = charactersApi;
