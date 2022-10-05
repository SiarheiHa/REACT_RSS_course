import React from 'react';
import { SearchBarProps } from 'types/types';
import './SearchBar.scss';

const SearchBar = ({ onInput, value }: SearchBarProps) => {
  return (
    <input onInput={onInput} value={value} className="search-bar" type="search" name="search" />
  );
};

export default SearchBar;
