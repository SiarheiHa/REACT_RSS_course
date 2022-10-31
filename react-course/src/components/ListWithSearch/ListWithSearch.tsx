import React, { useContext } from 'react';
import ItemList from 'components/ItemList';
import SearchBar from 'components/SearchBar';
import Spinner from 'components/Spinner';
import './ListWithSearch.scss';
import Pagination from 'components/Pagination';
import { CharactersContext } from 'context/CharactersState';

const ListWithSearch = () => {
  const {
    state: { characters, status },
  } = useContext(CharactersContext);

  const errorMessage = status.error ? <p>Oops! Something went wrong...</p> : null;
  const spinner = status.loading ? <Spinner /> : null;
  const content = characters.length ? <ItemList items={characters} /> : <p>no reluts</p>;

  return (
    <div className="list-with-search">
      <SearchBar disabled={status.loading} />
      <Pagination />
      {errorMessage}
      {spinner}
      {!status.error && !status.loading ? content : null}
    </div>
  );
};

export default ListWithSearch;
