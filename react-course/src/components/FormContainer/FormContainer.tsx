import React from 'react';
import { FormContainerState } from 'types/types';
import CardList from './CardList';
import Form from './Form';

import './FormContainer.scss';

class FormContainer extends React.Component<Record<string, never>, FormContainerState> {
  state = {
    cards: [],
  };

  onFormFill = (data: Record<string, string | File>) => {
    this.setState(({ cards }) => {
      return { cards: [...cards, data] };
    });
  };

  render() {
    return (
      <div data-testid="form-container">
        <Form onFormFill={this.onFormFill} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default FormContainer;
