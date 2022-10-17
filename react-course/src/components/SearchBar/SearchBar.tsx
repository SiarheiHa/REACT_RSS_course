import React from 'react';
import { SearchBarProps } from 'types/types';
import './SearchBar.scss';

const SearchBar = ({ onSubmit, value, disabled }: SearchBarProps) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        defaultValue={value}
        className="search-bar"
        type="search"
        name="search"
        placeholder="type character name"
      />
      <button type="submit" disabled={disabled}>
        {disabled ? 'loading' : 'search'}
      </button>
    </form>
  );
};

export default SearchBar;
