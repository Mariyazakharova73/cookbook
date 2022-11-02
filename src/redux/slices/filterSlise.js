import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  loading: true,
  sortType: {
    name: 'алфавиту (а-я)',
    sortProperty: '-title',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setSortType, setSearchValue, setLoading } = filterSlice.actions;

export const selectSortType = (state) => state.filter.sortType;
export const selectLoading = (state) => state.filter.loading;
export const selectSearchValue = (state) => state.filter.searchValue;
export const selectFilter = (state) => state.filter;

export default filterSlice.reducer;
