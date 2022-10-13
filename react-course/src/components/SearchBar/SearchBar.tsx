import React from 'react';
import { SearchBarProps } from 'types/types';
import './SearchBar.scss';

const SearchBar = ({ onSubmit, value }: SearchBarProps) => {
  return (
    <form onSubmit={onSubmit}>
      <input defaultValue={value} className="search-bar" type="search" name="search" />
    </form>
  );
};

export default SearchBar;
