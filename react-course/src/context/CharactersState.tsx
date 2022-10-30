import React, { createContext, useReducer } from 'react';
import { CharactersStateType, CharactersContextType, Sorting } from 'types/types';
import { charactersReducer } from './charactersReducer';

const initialCharactersState: CharactersStateType = {
  characters: [],
  currentPage: '4',
  limit: '50',
  pages: '25',
  sorting: Sorting.ASC,
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
