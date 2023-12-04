import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';

type InitialStateSubmitts = { submitts: Array<FormData> };

type FormData = {
  name: string;
  age: string;
  email: string;
  gender: string;
};

const initialState: InitialStateSubmitts = {
  submitts: [],
};

export const searchSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    addNewSubmit: (state, action) => {
      return {
        ...state,
        submitts: [
          ...state.submitts,
          {
            name: action.payload.name,
            age: action.payload.age,
            email: action.payload.email,
            gender: action.payload.gender,
          },
        ],
      };
    },
  },
});

export const selectSubmitts = createSelector(
  (state: { form: { submitts: [FormData] } }) => state.form,
  (search) => search.submitts
);

export const { addNewSubmit: addNewSubmit } = searchSlice.actions;

export default searchSlice.reducer;
