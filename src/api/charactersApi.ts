import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character } from '@/types/types';
import { BASE_URL } from '@/lib/config';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchCharacters: builder.query<Character[], { name?: string; page?: number; limit?: number }>({
      query: ({ name, page, limit }) => {
        const nameQuery = name ? `${name}` : '';
        const pageQuery = page ? `&_page=${page}` : '';
        const limitQuery = limit ? `&_limit=${limit}` : '';
        return `?q=${nameQuery}${pageQuery}${limitQuery}`;
      },
    }),
  }),
});

export const { useFetchCharactersQuery } = charactersApi;
