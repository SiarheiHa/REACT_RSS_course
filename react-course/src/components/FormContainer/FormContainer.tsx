import React, { useState } from 'react';
import CardList from './CardList';
import Form from './Form';

import './FormContainer.scss';

const FormContainer = () => {
  const [cards, setCards] = useState<Record<string, string>[]>([]);

  const onFormFill = (data: Record<string, string>) => {
    setCards([...cards, data]);
  };

  return (
    <div data-testid="form-container">
      <Form onFormFill={onFormFill} />
      <CardList cards={cards as Record<string, string>[]} />
    </div>
  );
};

export default FormContainer;

// class FormContainer extends React.Component<Record<string, never>, FormContainerState> {
//   state = {
//     cards: [],
//   };

//   onFormFill = (data: Record<string, string | File>) => {
//     this.setState(({ cards }) => {
//       return { cards: [...cards, data] };
//     });
//   };

//   render() {
//     return (
//       <div data-testid="form-container">
//         <Form onFormFill={this.onFormFill} />
//         <CardList cards={this.state.cards} />
//       </div>
//     );
//   }
// }
