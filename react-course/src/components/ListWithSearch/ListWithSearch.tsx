import React, { FormEvent, useEffect, useState } from 'react';
import Api from 'api';
import CharacterCard from 'components/CharacterCard';
import ItemList from 'components/ItemList';
import Modal from 'components/Modal';
import SearchBar from 'components/SearchBar';
import Spinner from 'components/Spinner';

import { Character } from 'types/types';

import './ListWithSearch.scss';
import Pagination from 'components/Pagination';

const api = new Api();

const ListWithSearch = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('search') || '');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [status, setStatus] = useState({ loading: true, error: false });

  useEffect(() => {
    localStorage.setItem('search', searchValue);
  }, [searchValue]);

  useEffect(() => {
    if (status.loading) {
      api.getCharacters(searchValue).then(onCharactersLoaded).catch(onError);
    }
  }, [status, searchValue]);

  const onError = () => {
    setStatus({ loading: false, error: true });
  };

  const onCharactersLoaded = (characters: Character[]) => {
    setStatus({ loading: false, error: false });
    setCharacters(characters);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target);
      const searchValue = String(formData.get('search') || '');
      setSearchValue(searchValue);
      setStatus((prevStatus) => {
        return { ...prevStatus, loading: true };
      });
    }
  };

  const onModalClose = () => setSelectedCharacter(null);

  const onCharacterClick = (character: Character) => setSelectedCharacter(character);

  const errorMessage = status.error ? <p>Oops! Something went wrong...</p> : null;
  const spinner = status.loading ? <Spinner /> : null;
  const content = characters.length ? (
    <ItemList items={characters} onClick={onCharacterClick} />
  ) : (
    <p>no reluts</p>
  );
  const modalContent = selectedCharacter ? (
    <CharacterCard character={selectedCharacter} detail />
  ) : null;

  return (
    <div className="list-with-search">
      <SearchBar onSubmit={onSubmit} value={searchValue} disabled={status.loading} />
      <Pagination />
      {errorMessage}
      {spinner}
      {!status.error && !status.loading ? content : null}
      <Modal isOpen={Boolean(selectedCharacter)} onClose={onModalClose}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default ListWithSearch;
