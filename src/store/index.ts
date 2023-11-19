import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '@/features/search-slice';
import { charactersApi } from '@/api/charactersApi';
import { characterByIdApi } from '@/api/characterByIdApi';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
    [characterByIdApi.reducerPath]: characterByIdApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware).concat(characterByIdApi.middleware),
});
