import { FormContext } from 'context/FormState';
import React, { useContext } from 'react';
import CardList from './CardList';
import Form from './Form';

import './FormContainer.scss';

const FormContainer = () => {
  const { state } = useContext(FormContext);

  return (
    <div data-testid="form-container">
      <Form />
      <CardList cards={state.cards} />
    </div>
  );
};

export default FormContainer;
