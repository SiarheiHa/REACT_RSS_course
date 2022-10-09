import React from 'react';
import Card from '../Card';

import './CardList.scss';

function CardList({ cards }: { cards: Record<string, string>[] }) {
  return (
    <div>
      {cards.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default CardList;
