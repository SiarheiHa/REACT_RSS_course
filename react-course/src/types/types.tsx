import React from 'react';

export interface Product {
  _id: string;
  set: string;
  item_id: number;
  reviews: number | null;
  rating: string;
  availability: string;
  price: number;
  images: string[];
  ages: string;
  pieces: number;
  __v: number;
}

export type ItemListProps = {
  items: Character[];
  onClick: (character: Character) => void;
};

export type ProductCardProps = {
  product: Product;
  onAddToCart: (item: Product) => void;
  onClickFavorite: (item: Product) => void;
  isInCart: boolean;
  isInFavorites: boolean;
};

export type SearchBarProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  disabled: boolean;
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
