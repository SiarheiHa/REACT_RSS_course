import React, { FormEvent, useEffect, useState } from 'react';
import Api from 'api';
import CharacterCard from 'components/CharacterCard';
import ItemList from 'components/ItemList';
import Modal from 'components/Modal';
import SearchBar from 'components/SearchBar';
import Spinner from 'components/Spinner';

import { Character } from 'types/types';

import './ListWithSearch.scss';

const api = new Api();

const ListWithSearch = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('search') || '');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('search', searchValue);
  }, [searchValue]);

  useEffect(() => {
    if (isLoading) {
      api.getCharacters(searchValue).then(onCharactersLoaded).catch(onError);
    }
  }, [isLoading, searchValue]);

  const onError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  const onCharactersLoaded = (characters: Character[]) => {
    setIsError(false);
    setIsLoading(false);
    setCharacters(characters);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target);
      const searchValue = String(formData.get('search') || '');
      setSearchValue(searchValue);
      setIsLoading(true);
    }
  };

  const onModalClose = () => setSelectedCharacter(null);

  const onCharacterClick = (character: Character) => setSelectedCharacter(character);

  const errorMessage = isError ? <p>Oops! Something went wrong...</p> : null;
  const spinner = isLoading ? <Spinner /> : null;
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
      <SearchBar onSubmit={onSubmit} value={searchValue} disabled={isLoading} />
      {errorMessage}
      {spinner}
      {!isError && !isLoading ? content : null}
      <Modal isOpen={Boolean(selectedCharacter)} onClose={onModalClose}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default ListWithSearch;
