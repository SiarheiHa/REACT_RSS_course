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
