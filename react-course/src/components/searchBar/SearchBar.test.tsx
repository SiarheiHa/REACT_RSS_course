import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('search bar renders', () => {
    render(<SearchBar value={''} onInput={() => {}} />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
  it('callback works', () => {
    const onInput = jest.fn();
    render(<SearchBar value={''} onInput={onInput} />);
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'text');
    expect(onInput).toBeCalledTimes(4);
  });
});
