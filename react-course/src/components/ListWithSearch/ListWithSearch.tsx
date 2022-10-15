import ItemList from 'components/ItemList';
import SearchBar from 'components/SearchBar';
import Api from 'api';
import { Character, ListWithSearchState } from 'types/types';

import React, { Component, FormEvent } from 'react';

import './ListWithSearch.scss';
import Modal from 'components/Modal';
import CharacterCard from 'components/CharacterCard';
import Spinner from 'components/Spinner';

class ListWithSearch extends Component<Record<string, never>, ListWithSearchState> {
  api = new Api();

  state: ListWithSearchState = {
    characters: [],
    searchValue: localStorage.getItem('search') || '',
    selectedCharacter: null,
    isError: false,
    isLoading: false,
    isModalOpen: false,
  };

  componentDidMount() {
    this.updateCharacters();
    window.addEventListener('beforeunload', this.setSearchValue);
  }

  componentWillUnmount() {
    this.setSearchValue();
    window.removeEventListener('beforeunload', this.setSearchValue);
  }

  setSearchValue = () => {
    localStorage.setItem('search', this.state.searchValue);
  };

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target);
      const searchValue = String(formData.get('search') || '');
      this.setState({ searchValue }, () => {
        this.updateCharacters();
      });
    }
  };

  onError = () => {
    // setTimeout(() => {
    this.setState({
      isError: true,
      isLoading: false,
    });
    // }, 1500);
  };

  updateCharacters() {
    this.setState({ isLoading: true });
    if (this.state.searchValue) {
      this.api
        .getCharacterBySearch(this.state.searchValue)
        .then(this.onCharactersLoaded)
        .catch(this.onError);
    } else {
      this.api.getAllCharacters().then(this.onCharactersLoaded).catch(this.onError);
    }
  }

  onCharactersLoaded = (characters: Character[]) => {
    // setTimeout(() => {
    this.setState({
      isError: false,
      isLoading: false,
      characters: characters,
    });
    // }, 2000);
  };

  onModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  onCharacterClick = (character: Character) => {
    console.log(character);
    this.setState({ selectedCharacter: character, isModalOpen: true });
  };

  render() {
    const { searchValue, isLoading, characters, isModalOpen, selectedCharacter, isError } =
      this.state;
    const errorMessage = isError ? <p>Oops! Something went wrong...</p> : null;
    const spinner = isLoading ? <Spinner /> : null;
    const content = characters.length ? (
      <ItemList items={characters} onClick={this.onCharacterClick} />
    ) : (
      <p>no reluts</p>
    );
    const modalContent = selectedCharacter ? (
      <CharacterCard character={selectedCharacter} detail />
    ) : null;

    return (
      <div className="list-with-search">
        <SearchBar onSubmit={this.onSubmit} value={searchValue} />
        {errorMessage}
        {spinner}
        {!isError && !isLoading ? content : null}
        <Modal isOpen={isModalOpen} onClose={this.onModalClose}>
          {modalContent}
        </Modal>
      </div>
    );
  }
}

export default ListWithSearch;
