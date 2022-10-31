import CharacterCard from 'components/CharacterCard';
import React from 'react';
import { Link } from 'react-router-dom';
import { Character } from 'types/types';

import './ItemList.scss';

const ItemList = ({ items }: { items: Character[] }) => {
  return (
    <div className="item-list">
      {items.map((item) => {
        return (
          <Link key={item._id} to={`characters/${item._id}`}>
            <CharacterCard character={item} key={item._id} />
          </Link>
        );
      })}
    </div>
  );
};

export default ItemList;
