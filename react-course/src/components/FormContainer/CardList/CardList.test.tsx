import { render, screen } from '@testing-library/react';
import React from 'react';
import CardListContainer from './CardList';

const testCard = {
  name: 'TestName',
  surname: 'TestSurName',
  birthday: '2022-10-06',
  location: 'Anguilla',
  gender: 'male',
  file: '',
};

describe('CardList', () => {
  it('CardList renders', () => {
    render(<CardListContainer cards={[testCard, testCard]} />);
    expect(screen.getAllByTestId('form-card').length).toEqual(2);
  });
});
