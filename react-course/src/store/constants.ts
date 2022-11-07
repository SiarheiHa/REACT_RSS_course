import { FormStateType, CharactersStateType, Sorting } from 'types/types';

export const initialFormState: FormStateType = {
  cards: [],
  inputsValues: null,
  hasFormErrors: false,
};

export const initialCharactersState: CharactersStateType = {
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
