import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';

type InitialStateSubmitts = { submitts: Array<Input> };

type Input = {
  example: string;
  exampleRequired: string;
};

const initialState: InitialStateSubmitts = {
  submitts: [],
};

export const searchSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    addNewSubmit: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        submitts: [
          ...state.submitts,
          { example: action.payload.example, exampleRequired: action.payload.exampleRequired },
        ],
      };
    },
  },
});

export const selectSubmitts = createSelector(
  (state: { form: { submitts: [Input] } }) => state.form,
  (search) => search.submitts
);

export const { addNewSubmit: addNewSubmit } = searchSlice.actions;

export default searchSlice.reducer;
