import ItemList from 'components/ItemList';
import SearchBar from 'components/SearchBar';
import Api from 'api';
import { Character, ListWithSearchState } from 'types/types';

import React, { Component, FormEvent } from 'react';

import './ListWithSearch.scss';
import Modal from 'components/Modal';

class ListWithSearch extends Component<Record<string, never>, ListWithSearchState> {
  api = new Api();

  state = {
    isLoading: true,
    characters: [],
    searchValue: localStorage.getItem('search') || '',
    isModalOpen: true,
  };

  componentDidMount() {
    // this.updateCharacters();
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
    if (this.state.searchValue) {
      this.api.getCharacterBySearch(this.state.searchValue).then(this.onCharactersLoaded);
    } else {
      this.api.getAllCharacters().then(this.onCharactersLoaded);
    }
  }

  onCharactersLoaded = (characters: Character[]) => {
    this.setState({
      isLoading: false,
      characters: characters,
    });
  };

  onModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { searchValue, isLoading, characters, isModalOpen } = this.state;
    return (
      <div className="list-with-search">
        <SearchBar onSubmit={this.onSubmit} value={searchValue} />
        {isLoading ? <p>LOADING...</p> : <ItemList items={characters} />}
        <Modal isOpen={isModalOpen} onClose={this.onModalClose}>
          <p>hello</p>
        </Modal>
      </div>
    );
  }
}

export default ListWithSearch;
