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
    isLoading: true,
    characters: [],
    searchValue: localStorage.getItem('search') || '',
    isModalOpen: false,
    selectedCharacter: null,
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
    if (e.target instanceof HTMLFormElement && e.target[0] instanceof HTMLInputElement) {
      const searchValue = e.target[0].value;
      this.setState({ searchValue }, () => {
        this.updateCharacters();
      });
    }
  };

  updateCharacters() {
    this.setState({ isLoading: true });
    if (this.state.searchValue) {
      this.api.getCharacterBySearch(this.state.searchValue).then(this.onCharactersLoaded);
    } else {
      this.api.getAllCharacters().then(this.onCharactersLoaded);
    }
  }

  onCharactersLoaded = (characters: Character[]) => {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        characters: characters,
      });
    }, 2000);
  };

  onModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  onCharacterClick = (character: Character) => {
    this.setState({ selectedCharacter: character, isModalOpen: true });
  };

  render() {
    const { searchValue, isLoading, characters, isModalOpen, selectedCharacter } = this.state;
    const modalContent = selectedCharacter ? (
      <CharacterCard character={selectedCharacter} detail />
    ) : null;
    const content = characters.length ? (
      <ItemList items={characters} onClick={this.onCharacterClick} />
    ) : (
      <p>no reluts</p>
    );
    return (
      <div className="list-with-search">
        <SearchBar onSubmit={this.onSubmit} value={searchValue} />
        {isLoading ? <Spinner /> : content}
        <Modal isOpen={isModalOpen} onClose={this.onModalClose}>
          {modalContent}
        </Modal>
      </div>
    );
  }
}

export default ListWithSearch;
