import React from 'react';

import './searchBar.scss';

type SearchBarProps = {
  onInput: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
};

const SearchBar = ({ onInput, value }: SearchBarProps) => {
  return (
    <form>
      <input onInput={onInput} value={value} className="search-bar" type="search" name="search" />
    </form>
  );
};

export default SearchBar;
