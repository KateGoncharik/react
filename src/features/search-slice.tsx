import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchQuery: '',
    currentPage: 0,
    maxPageCount: 0,
  },
  reducers: {
    makeNewSearch: (state, action) => {
      state.searchQuery = action.payload.searchQuery;
    },
    goToNextPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
    goToPrevPage: (state) => {
      state.currentPage = state.currentPage - 1;
    },
  },
});

export const selectSearchQuery = createSelector(
  (state: { search: { searchQuery: string } }) => state.search,
  (search) => search.searchQuery
);

export const { makeNewSearch, goToNextPage, goToPrevPage } = searchSlice.actions;

export default searchSlice.reducer;
