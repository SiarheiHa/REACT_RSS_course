import React from 'react';
import './ProductCard.scss';
import { Character } from 'types/types';

function CharacterCard(props: { character: Character }) {
  const { name, race } = props.character;

  return (
    <div className="product">
      <p>{name}</p>
      <p>{race}</p>
    </div>
  );
}

export default CharacterCard;
