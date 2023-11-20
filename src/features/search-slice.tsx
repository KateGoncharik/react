import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import { getItem } from '@/lib/local-storage';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchQuery: getItem('lastSearchQuery'),
    currentPage: 1,
    maxPageCount: 1,
  },
  reducers: {
    makeNewSearch: (state, action) => {
      state.searchQuery = action.payload.searchQuery;
    },
    setMaxPageCount: (state, action) => {
      state.maxPageCount = action.payload.maxPageCount;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload.currentPage;
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

export const selectMaxPageCount = createSelector(
  (state: { search: { maxPageCount: number } }) => state.search,
  (search) => search.maxPageCount
);
export const selectCurrentPage = createSelector(
  (state: { search: { currentPage: number } }) => state.search,
  (search) => search.currentPage
);

export const { makeNewSearch, setMaxPageCount, setCurrentPage, goToNextPage, goToPrevPage } =
  searchSlice.actions;

export default searchSlice.reducer;
