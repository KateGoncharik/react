import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const searchSlice = createSlice({
  name: 'form',
  initialState: {
    submitts: [],
  },
  reducers: {
    addNewSubmit: (state, action) => {
      state.submitts = action.payload.submitts;
    },
  },
});

export const selectSubmitts = createSelector(
  (state: { form: { submitts: [Inputs] } }) => state.form,
  (search) => search.submitts
);

export const { addNewSubmit: addNewSubmit } = searchSlice.actions;

export default searchSlice.reducer;
