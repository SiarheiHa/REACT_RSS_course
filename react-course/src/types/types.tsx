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
  [InputName.file]: FileList;
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
