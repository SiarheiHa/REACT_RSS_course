import { AppContext } from 'context/AppState';
import React, { useContext } from 'react';
import CardList from './CardList';
import Form from './Form';

import './FormContainer.scss';

const FormContainer = () => {
  const { state } = useContext(AppContext);

  return (
    <div data-testid="form-container">
      <Form />
      <CardList cards={state.cards} />
    </div>
  );
};

export default FormContainer;
