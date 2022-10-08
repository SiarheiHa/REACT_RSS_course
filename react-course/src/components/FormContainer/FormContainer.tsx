import React from 'react';
import CardList from './CardList';
import Form from './Form';

import './FormContainer.scss';

class FormContainer extends React.Component {
  onFormFill = (data: Record<string, string>) => {
    console.log('form is filled');
    console.log(data);
  };

  render() {
    return (
      <div>
        <p>container</p>
        <Form onFormFill={this.onFormFill} />
        <CardList />
      </div>
    );
  }
}
// const FormContainer = () => <p>cont</p>;
export default FormContainer;
