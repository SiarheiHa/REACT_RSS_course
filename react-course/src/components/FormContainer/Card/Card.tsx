import React from 'react';

import './Card.scss';

const Card = ({ card }: { card: Record<string, string> }) => {
  return (
    <div className="form-page__card" data-testid="form-card">
      <img src={card.file} alt="image" height="150" />
      {Object.entries(card).map(([field, value]) => {
        if (field === 'file') return;
        return (
          <p key={value}>
            <span>{field + ': '}</span>
            <span>{value}</span>
          </p>
        );
      })}
    </div>
  );
};

export default Card;
