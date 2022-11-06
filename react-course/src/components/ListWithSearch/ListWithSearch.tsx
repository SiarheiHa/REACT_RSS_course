import React from 'react';
import ItemList from 'components/ItemList';
import SearchBar from 'components/SearchBar';
import Spinner from 'components/Spinner';
import Pagination from 'components/Pagination';
import { useAppSelector } from 'store';
import './ListWithSearch.scss';

const ListWithSearch = () => {
  const { characters, status } = useAppSelector((state) => state.characters);

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
