import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import formReducer from '@/features/form-slice';
import { setupListeners } from '@reduxjs/toolkit/query/react';

const makeStore = () => {
  return configureStore({
    reducer: {
      form: formReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export const store = makeStore();
setupListeners(store.dispatch);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
