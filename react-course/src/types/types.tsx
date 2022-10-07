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

export type FormState = {
  isSubmitDisabled: boolean;
};

export enum InputNames {
  name = 'name',
  surname = 'surname',
  birthday = 'birthday',
  location = 'location',
  checkbox = 'checkbox',
  switcher = 'switcher',
  file = 'file',
}

export type FormRefs = {
  [InputNames.name]: React.RefObject<HTMLInputElement>;
  [InputNames.surname]: React.RefObject<HTMLInputElement>;
  [InputNames.birthday]: React.RefObject<HTMLInputElement>;
  [InputNames.location]: React.RefObject<HTMLSelectElement>;
  [InputNames.checkbox]: React.RefObject<HTMLInputElement>;
  [InputNames.switcher]: React.RefObject<HTMLInputElement>;
  [InputNames.file]: React.RefObject<HTMLInputElement>;
};
