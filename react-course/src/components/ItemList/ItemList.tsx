import React from 'react';
import ProductCard from 'components/ProductCard';
import { ItemListProps } from '../../types/types';

import './ItemList.scss';

const ItemList = ({ items, cart, favorites, onAddToCart, onClickFavorite }: ItemListProps) => {
  return (
    <div className="item-list">
      {items.map((item) => {
        const isInCart = cart.includes(item);
        const isInFavorites = favorites.includes(item);
        return (
          <ProductCard
            product={item}
            key={item._id}
            isInCart={isInCart}
            isInFavorites={isInFavorites}
            onAddToCart={onAddToCart}
            onClickFavorite={onClickFavorite}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
