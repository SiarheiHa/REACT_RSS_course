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
  items: Product[];
  cart: Product[];
  favorites: Product[];
  onAddToCart: (item: Product) => void;
  onClickFavorite: (item: Product) => void;
};

export type ListWithSearchState = {
  products: Product[];
  searchValue: string;
  cart: Product[];
  favorites: Product[];
};

export type ProductCardProps = {
  product: Product;
  onAddToCart: (item: Product) => void;
  onClickFavorite: (item: Product) => void;
  isInCart: boolean;
  isInFavorites: boolean;
};

export type SearchBarProps = {
  onInput: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
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

export type FormProps = {
  onFormFill: (data: Record<string, string>) => void;
};

export type FormState = {
  isSubmitDisabled: boolean;
  inputErrors: InputErrors;
};

export type InputErrors = Partial<Record<InputName, boolean>>;

export type FormRefs = {
  [InputName.name]: React.RefObject<HTMLInputElement>;
  [InputName.surname]: React.RefObject<HTMLInputElement>;
  [InputName.birthday]: React.RefObject<HTMLInputElement>;
  [InputName.location]: React.RefObject<HTMLSelectElement>;
  [InputName.checkbox]: React.RefObject<HTMLInputElement>;
  [InputName.switcher]: React.RefObject<HTMLInputElement>;
  [InputName.file]: React.RefObject<HTMLInputElement>;
};
