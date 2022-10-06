import { render, screen } from '@testing-library/react';
import React from 'react';
import FormPage from './FormPage';

describe('MainPage', () => {
  it('MainPage renders', () => {
    render(<FormPage />);
    // expect(screen.getByText('FormPage')).toBeInTheDocument();
  });
});
