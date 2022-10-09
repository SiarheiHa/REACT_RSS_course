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
    console.log('form is filled');
    console.log(data);
    this.setState(({ cards }) => {
      return { cards: [...cards, data] };
    });
  };

  render() {
    return (
      <div>
        <p>container</p>
        <Form onFormFill={this.onFormFill} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}
// const FormContainer = () => <p>cont</p>;
export default FormContainer;
