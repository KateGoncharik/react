import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character } from '@/types/types';
import { BASE_URL } from '@/lib/config';

export const characterByIdApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchCharacterById: builder.query<Character, { id?: string }>({
      query: ({ id }) => {
        return `/${id}`;
      },
    }),
  }),
});

export const { useFetchCharacterByIdQuery } = characterByIdApi;
