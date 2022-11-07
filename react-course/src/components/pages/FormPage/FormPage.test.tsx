import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from 'utils/test-utils';
import FormPage from './FormPage';

describe('FormPage', () => {
  beforeEach(() => {
    renderWithProviders(<FormPage />);
  });

  it('FormPage renders', () => {
    expect(screen.getByText('Fill out the form to create a card')).toBeInTheDocument();
  });
});
