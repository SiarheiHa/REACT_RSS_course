import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CharactersStateType, ResponseModel, Sorting } from 'types/types';
import Api from 'api';

const api = new Api();

export const fetchCharacters = createAsyncThunk<ResponseModel>(
  'characters/fetchCharacters',
  async function () {
    const data = await api.getPaginatedData('2', '10', 'asc', '');
    // const data = await api.getPaginatedData(currentPage, limit, sorting, searchValue);
    return data;
  }
);

const initialCharactersState: CharactersStateType = {
  characters: [],
  currentPage: '1',
  limit: '20',
  pages: '',
  sorting: Sorting.DEFAULT,
  searchValue: localStorage.getItem('search') || '',
  status: {
    loading: false,
    error: false,
  },
};

const chararactersSlice = createSlice({
  name: 'characters',
  initialState: initialCharactersState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.status.loading = true;
      state.status.error = false;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.status.loading = false;
      state.status.error = false;
      state.pages = String(action.payload.pages);
      state.characters = action.payload.docs;
    });
  },
  // {
  // [fetchCharacters.pending]: (state, action) => {},
  // [fetchCharacters.fulfilled]: (state, action) => {},
  // [fetchCharacters.rejected]: (state, action) => {},
  // },
});

export default chararactersSlice.reducer;
