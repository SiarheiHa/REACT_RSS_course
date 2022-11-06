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

export type CardData = Record<string, string>;

export type FormStateType = {
  cards: CardData[];
  inputsValues: FormData | null;
  hasFormErrors: boolean;
};

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

export enum Sorting {
  ASC = 'asc',
  DESC = 'desc',
  DEFAULT = 'default',
}
