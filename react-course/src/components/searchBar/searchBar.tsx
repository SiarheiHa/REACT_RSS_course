import React from 'react';

import './searchBar.scss';

const SearchBar = () => {
  return (
    <form>
      <input className="search-bar" type="search" name="search" />
    </form>
  );
};

export default SearchBar;
