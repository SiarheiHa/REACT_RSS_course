import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('search bar renders', () => {
    render(<SearchBar disabled={false} />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
