import React, { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { setSearch } from 'store/charactersSlice';
import './SearchBar.scss';

const SearchBar = ({ disabled }: { disabled: boolean }) => {
  const searchValue = useAppSelector((state) => state.characters.searchValue);
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target);
      const value = String(formData.get('search') || '');

      localStorage.setItem('search', value);
      dispatch(setSearch(value));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        defaultValue={searchValue}
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
