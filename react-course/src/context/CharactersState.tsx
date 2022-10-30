import React, { createContext, useReducer } from 'react';
import { CharactersStateType, CharactersContextType, Sorting } from 'types/types';
import { charactersReducer } from './charactersReducer';

const initialCharactersState: CharactersStateType = {
  characters: [],
  currentPage: '1',
  limit: '20',
  pages: '',
  sorting: Sorting.DEFAULT,
  searchValue: localStorage.getItem('search') || '',
};

const initialCharactersContext: CharactersContextType = {
  state: initialCharactersState,
  dispatch: () => {},
};

export const CharactersContext = createContext<CharactersContextType>(initialCharactersContext);

export const CharactersState = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(charactersReducer, initialCharactersState);

  return (
    <CharactersContext.Provider value={{ state, dispatch }}>{children}</CharactersContext.Provider>
  );
};
