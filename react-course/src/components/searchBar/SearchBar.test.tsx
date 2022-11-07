import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from 'utils/test-utils';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  beforeEach(() => {
    renderWithProviders(<SearchBar disabled={false} />);
  });
  it('search bar renders', () => {
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
