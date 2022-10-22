import ItemList from 'components/ItemList';
import SearchBar from 'components/SearchBar';
import Api from 'api';
import { Character, ListWithSearchState } from 'types/types';

import React, { Component, FormEvent } from 'react';

import './ListWithSearch.scss';
import Modal from 'components/Modal';
import CharacterCard from 'components/CharacterCard';
import Spinner from 'components/Spinner';

const api = new Api();

class ListWithSearch extends Component<Record<string, never>, ListWithSearchState> {
  state: ListWithSearchState = {
    characters: [],
    searchValue: localStorage.getItem('search') || '',
    selectedCharacter: null,
    isError: false,
    isLoading: false,
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
    this.setState({
      isError: true,
      isLoading: false,
    });
  };

  updateCharacters() {
    this.setState({ isLoading: true });
    api.getCharacters(this.state.searchValue).then(this.onCharactersLoaded).catch(this.onError);
  }

  onCharactersLoaded = (characters: Character[]) => {
    this.setState({
      isError: false,
      isLoading: false,
      characters: characters,
    });
  };

  onModalClose = () => {
    this.setState({ selectedCharacter: null });
  };

  onCharacterClick = (character: Character) => {
    this.setState({ selectedCharacter: character });
  };

  render() {
    const { searchValue, isLoading, characters, selectedCharacter, isError } = this.state;
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
        <SearchBar onSubmit={this.onSubmit} value={searchValue} disabled={isLoading} />
        {errorMessage}
        {spinner}
        {!isError && !isLoading ? content : null}
        <Modal isOpen={Boolean(selectedCharacter)} onClose={this.onModalClose}>
          {modalContent}
        </Modal>
      </div>
    );
  }
}

export default ListWithSearch;
