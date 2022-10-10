import { render, screen } from '@testing-library/react';
import React from 'react';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('FormPage renders', () => {
    render(<FormPage />);
    expect(screen.getByText('Fill out the form to create a card')).toBeInTheDocument();
  });
});
