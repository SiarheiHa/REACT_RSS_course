import CharacterCard from 'components/CharacterCard';
import React from 'react';
import { ItemListProps } from '../../types/types';

import './ItemList.scss';

const ItemList = ({ items }: ItemListProps) => {
  console.log(items);
  return (
    <div className="item-list">
      {items.map((item) => {
        return <CharacterCard character={item} key={item._id} />;
      })}
      {/* {items.map((item) => {
        const isInCart = cart.includes(item);
        const isInFavorites = favorites.includes(item);
        return (
          <CharacterCard
            product={item}
            key={item._id}
            isInCart={isInCart}
            isInFavorites={isInFavorites}
            onAddToCart={onAddToCart}
            onClickFavorite={onClickFavorite}
          />
        );
      })} */}
    </div>
  );
};

export default ItemList;
