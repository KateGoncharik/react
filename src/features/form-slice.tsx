import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';

import { FormData } from '@/types/form-data';

type InitialStateSentFormData = { sentFormData: Array<FormData> };

const initialState: InitialStateSentFormData = {
  sentFormData: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveNewFormData: (state, action) => {
      return {
        ...state,
        sentFormData: [
          ...state.sentFormData,
          {
            name: action.payload.name,
            age: action.payload.age,
            email: action.payload.email,
            gender: action.payload.gender,
            acceptRules: action.payload.acceptRules,
            uploadImage: action.payload.uploadImage,
          },
        ],
      };
    },
  },
});

export const selectSentFormData = createSelector(
  (state: { form: { sentFormData: [FormData] } }) => state.form,
  (form) => form.sentFormData
);

export const { saveNewFormData: addNewSubmit } = formSlice.actions;

export default formSlice.reducer;
