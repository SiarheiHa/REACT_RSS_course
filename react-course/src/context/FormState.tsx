import React, { createContext, useReducer } from 'react';
import { FormContextType, FormStateType } from 'types/types';
import { formReducer } from './formReducer';

const initialFormState: FormStateType = {
  cards: [],
  inputsValues: null,
  hasFormErrors: false,
};

const initialFormContext: FormContextType = {
  state: initialFormState,
  dispatch: () => {},
};

export const FormContext = createContext<FormContextType>(initialFormContext);

export const FormState = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  return <FormContext.Provider value={{ state, dispatch }}>{children}</FormContext.Provider>;
};
