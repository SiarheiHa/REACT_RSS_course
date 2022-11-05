import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CharactersStateType, ResponseModel, SetCurrentPage, Sorting } from 'types/types';
import Api from 'api';

const api = new Api();

type Request = {
  page: string;
  limit: string;
  sorting: string;
  searchValue: string;
};

export const fetchCharacters = createAsyncThunk<ResponseModel, Request>(
  'characters/fetchCharacters',
  async function ({ page, limit, sorting, searchValue }: Request, { rejectWithValue }) {
    // const data = await api.getPaginatedData('2', '10', 'asc', '');
    try {
      const data = await api.getPaginatedData(page, limit, sorting, searchValue);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('error');
    }
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

const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialCharactersState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload;
    },
    setLimit(state, action: PayloadAction<string>) {
      state.currentPage = '1';
      state.limit = action.payload;
    },
    setSorting(state, action: PayloadAction<Sorting>) {
      state.sorting = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.currentPage = '1';
      state.searchValue = action.payload;
    },
  },
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
    builder.addCase(fetchCharacters.rejected, (state) => {
      state.status.loading = false;
      state.status.error = true;
    });
  },
});

export const { setCurrentPage, setLimit, setSearch, setSorting } = charactersSlice.actions;
export default charactersSlice.reducer;
