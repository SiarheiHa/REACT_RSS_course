import React, { createContext, useReducer } from 'react';
import { AppContextType, AppStateType } from 'types/types';
import { appReducer } from './appReducer';

const initialState: AppStateType = {
  cards: [],
  inputsValues: null,
  hasFormErrors: false,
};

const initialContext: AppContextType = {
  state: initialState,
  dispatch: () => {},
};

export const AppContext = createContext<AppContextType>(initialContext);

export const AppState = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
