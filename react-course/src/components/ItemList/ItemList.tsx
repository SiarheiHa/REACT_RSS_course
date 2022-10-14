import CharacterCard from 'components/CharacterCard';
import React from 'react';
import { ItemListProps } from '../../types/types';

import './ItemList.scss';

const ItemList = ({ items }: ItemListProps) => {
  return (
    <div className="item-list">
      {items.map((item) => {
        return <CharacterCard character={item} key={item._id} />;
      })}
    </div>
  );
};

export default ItemList;
