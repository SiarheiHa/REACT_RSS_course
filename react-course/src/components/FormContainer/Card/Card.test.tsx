import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from './Card';

const testCard = {
  name: 'TestName',
  surname: 'TestSurName',
  birthday: '2022-10-06',
  location: 'Anguilla',
  gender: 'male',
  file: '',
};

describe('Card', () => {
  it('Card renders', () => {
    render(<Card card={testCard} />);
    expect(screen.getByText('TestName')).toBeInTheDocument();
    expect(screen.getByText('TestSurName')).toBeInTheDocument();
    expect(screen.getByText('2022-10-06')).toBeInTheDocument();
    expect(screen.getByText('Anguilla')).toBeInTheDocument();
    expect(screen.getByText('male')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
