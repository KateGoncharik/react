import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '@/features/search-slice';
import { charactersApi } from '@/api/charactersApi';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
});
