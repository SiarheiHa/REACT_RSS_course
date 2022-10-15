import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('search bar renders', () => {
    render(<SearchBar value={''} onSubmit={() => {}} />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
  it('callback works', () => {
    const onSubmit = jest.fn();
    render(<SearchBar value={''} onSubmit={onSubmit} />);
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'text');
    userEvent.keyboard('{Enter}');
    expect(onSubmit).toBeCalledTimes(1);
  });
});
