import { CharactersContext } from 'context/CharactersState';
import React, { FormEvent, useContext } from 'react';
import { CharactersActionType } from 'types/types';
import './SearchBar.scss';

const SearchBar = ({ disabled }: { disabled: boolean }) => {
  const {
    state: { searchValue },
    dispatch,
  } = useContext(CharactersContext);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target);
      const value = String(formData.get('search') || '');

      localStorage.setItem('search', value);
      dispatch({
        type: CharactersActionType.SET_SEARCH,
        payload: value,
      });
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
