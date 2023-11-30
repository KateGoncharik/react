import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import searchReducer from '@/features/search-slice';
import { charactersApi } from '@/api/charactersApi';
import { createWrapper } from 'next-redux-wrapper';
import { setupListeners } from '@reduxjs/toolkit/query/react';

const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer,
      [charactersApi.reducerPath]: charactersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export const store = makeStore();
setupListeners(store.dispatch);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export const wrapper = createWrapper<AppStore>(makeStore);
