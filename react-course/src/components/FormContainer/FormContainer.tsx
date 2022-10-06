import React from 'react';
import CardList from './CardList';
import Form from './Form';

import './FormContainer.scss';

class FormContainer extends React.Component {
  render() {
    return (
      <div>
        <p>container</p>
        <Form />
        <CardList />
      </div>
    );
  }
}
// const FormContainer = () => <p>cont</p>;
export default FormContainer;
