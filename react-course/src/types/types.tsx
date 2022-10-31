import React from 'react';

export type ItemListProps = {
  items: Character[];
  onClick: (character: Character) => void;
};

// Form

export enum InputName {
  name = 'name',
  surname = 'surname',
  birthday = 'birthday',
  location = 'location',
  checkbox = 'checkbox',
  switcher = 'switcher',
  file = 'file',
}

export enum SwitcherValue {
  left = 'male',
  right = 'female',
}

export type FormData = {
  [InputName.name]: string;
  [InputName.surname]: string;
  [InputName.birthday]: string;
  [InputName.location]: string;
  [InputName.checkbox]: boolean;
  [InputName.switcher]: boolean;
  [InputName.file]: FileList | null;
};

// API
export enum Endpoint {
  character = '/character/',
}

export type Character = {
  _id: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
};

export type ResponseModel = {
  docs: Character[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
};

// custom state
//form
export enum FormActionType {
  ADD_CARD = 'ADD_CARD',
  SAVE_INPUT_VALUES = 'SAVE_INPUTS_VALUES',
  SAVE_ERRORS = 'SAVE_ERRORS',
}

export type FormActionModel = {
  type: FormActionType;
};

export type CardData = Record<string, string>;

export type FormStateType = {
  cards: CardData[];
  inputsValues: FormData | null;
  hasFormErrors: boolean;
};

export interface SaveCardAction extends FormActionModel {
  type: FormActionType.ADD_CARD;
  payload: CardData;
}

export interface SaveInputsValues extends FormActionModel {
  type: FormActionType.SAVE_INPUT_VALUES;
  payload: FormData;
}

export interface SaveErrors extends FormActionModel {
  type: FormActionType.SAVE_ERRORS;
}

export type FormAction = SaveCardAction | SaveInputsValues | SaveErrors;

export type FormContextType = {
  state: FormStateType;
  dispatch: React.Dispatch<FormAction>;
};

//characters
type LoadingStatus = {
  loading: boolean;
  error: boolean;
};

export type CharactersStateType = {
  characters: Character[];
  currentPage: string;
  limit: string;
  pages: string;
  sorting: Sorting;
  searchValue: string;
  status: LoadingStatus;
};

export enum CharactersActionType {
  // pagination
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_LIMIT = 'SET_LIMIT',
  SET_SORTING = 'SET_SORTING',
  //characters list
  SET_SEARCH = 'SET_SEARCH',
  SET_CHARACTERS = 'SET_CHARACTERS',
  SET_STATUS = 'SET_STATUS',
}

export type CharactersActionModel = {
  type: CharactersActionType;
};
export interface SetCurrentPage extends CharactersActionModel {
  type: CharactersActionType.SET_CURRENT_PAGE;
  payload: string;
}
export interface SetLimit extends CharactersActionModel {
  type: CharactersActionType.SET_LIMIT;
  payload: string;
}
export interface SetSorting extends CharactersActionModel {
  type: CharactersActionType.SET_SORTING;
  payload: Sorting;
}
export interface SetSearch extends CharactersActionModel {
  type: CharactersActionType.SET_SEARCH;
  payload: string;
}

export interface SetCharacters extends CharactersActionModel {
  type: CharactersActionType.SET_CHARACTERS;
  payload: ResponseModel;
}

export interface SetStatus extends CharactersActionModel {
  type: CharactersActionType.SET_STATUS;
  payload: LoadingStatus;
}

export type CharactersAction =
  | SetCurrentPage
  | SetLimit
  | SetSorting
  | SetSearch
  | SetCharacters
  | SetStatus;

export type CharactersContextType = {
  state: CharactersStateType;
  dispatch: React.Dispatch<CharactersAction>;
};

export enum Sorting {
  ASC = 'asc',
  DESC = 'desc',
  DEFAULT = 'default',
}
