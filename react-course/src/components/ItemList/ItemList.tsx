import CharacterCard from 'components/CharacterCard';
import React from 'react';
import { Link } from 'react-router-dom';
import { ItemListProps } from '../../types/types';

import './ItemList.scss';

const ItemList = ({ items, onClick }: ItemListProps) => {
  return (
    <div className="item-list">
      {items.map((item) => {
        return (
          <Link key={item._id} to={`characters/${item._id}`}>
            <CharacterCard character={item} onClick={onClick} key={item._id} />
          </Link>
        );
      })}
    </div>
  );
};

export default ItemList;
