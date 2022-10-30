import React, { FormEvent, useContext, useEffect, useState } from 'react';
import Api from 'api';
import CharacterCard from 'components/CharacterCard';
import ItemList from 'components/ItemList';
import Modal from 'components/Modal';
import SearchBar from 'components/SearchBar';
import Spinner from 'components/Spinner';
import { Character, CharactersActionType, ResponseModel } from 'types/types';
import './ListWithSearch.scss';
import Pagination from 'components/Pagination';
import { CharactersContext } from 'context/CharactersState';

const api = new Api();

const ListWithSearch = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [status, setStatus] = useState({ loading: false, error: false });

  const {
    state: { characters, currentPage, limit, sorting, searchValue },
    dispatch,
  } = useContext(CharactersContext);

  useEffect(() => {
    localStorage.setItem('search', searchValue);
  }, [searchValue]);

  useEffect(() => {
    const onCharactersLoaded = (data: ResponseModel) => {
      setStatus({ loading: false, error: false });
      dispatch({
        type: CharactersActionType.SET_CHARACTERS,
        payload: data,
      });
    };

    api
      .getPaginatedData(currentPage, limit, sorting, searchValue)
      .then(onCharactersLoaded)
      .catch(onError);
    setStatus((prevStatus) => {
      return { ...prevStatus, loading: true };
    });
  }, [currentPage, limit, sorting, searchValue, dispatch]);

  const onError = () => {
    setStatus({ loading: false, error: true });
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
      <SearchBar disabled={status.loading} />
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
