import React from 'react';
import { useAppSelector } from 'store';
import CardList from './CardList';
import Form from './Form';

import './FormContainer.scss';

const FormContainer = () => {
  const cards = useAppSelector((state) => state.form.cards);

  return (
    <div data-testid="form-container">
      <Form />
      <CardList cards={cards} />
    </div>
  );
};

export default FormContainer;
