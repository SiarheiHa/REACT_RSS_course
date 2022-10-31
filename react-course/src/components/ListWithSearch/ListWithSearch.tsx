import React, { useContext, useEffect, useState } from 'react';
import CharacterCard from 'components/CharacterCard';
import ItemList from 'components/ItemList';
import Modal from 'components/Modal';
import SearchBar from 'components/SearchBar';
import Spinner from 'components/Spinner';
import { Character } from 'types/types';
import './ListWithSearch.scss';
import Pagination from 'components/Pagination';
import { CharactersContext } from 'context/CharactersState';

const ListWithSearch = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const {
    state: { characters, searchValue, status },
  } = useContext(CharactersContext);

  useEffect(() => {
    localStorage.setItem('search', searchValue);
  }, [searchValue]);

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
