import ItemList from 'components/ItemList';
import SearchBar from 'components/SearchBar';
import data from '../../data';
import Api from 'api';
import { Character, ListWithSearchState, Product } from 'types/types';

import React, { Component } from 'react';

import './ListWithSearch.scss';

class ListWithSearch extends Component<Record<string, never>, ListWithSearchState> {
  api = new Api();

  state = {
    isLoading: true,
    characters: [],
    products: data,
    searchValue: '',
    cart: [],
    favorites: [],
  };

  componentDidMount() {
    const searchValue = localStorage.getItem('search');
    if (searchValue) this.setState({ searchValue });
    window.addEventListener('beforeunload', this.setSearchValue);

    // console.log(new Api().getCharacterBySearch('gand'));
    this.updateCharacters();
  }

  componentWillUnmount() {
    this.setSearchValue();
    window.removeEventListener('beforeunload', this.setSearchValue);
  }

  setSearchValue = () => {
    localStorage.setItem('search', this.state.searchValue);
  };

  onInput = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.currentTarget.value }, this.updateCharacters);
  };

  onAddToCart = (product: Product) => {
    this.setState(({ cart }) => {
      if (cart.includes(product)) {
        return { cart: cart.filter((item) => item !== product) };
      }
      return { cart: [...cart, product] };
    });
  };

  onClickFavorite = (product: Product) => {
    this.setState(({ favorites }) => {
      if (favorites.includes(product)) {
        return { favorites: favorites.filter((item) => item !== product) };
      }
      return { favorites: [...favorites, product] };
    });
  };

  filterBySearch(products: Product[]) {
    return products.filter(({ set }) =>
      set.toLowerCase().includes(this.state.searchValue.toLowerCase())
    );
  }

  updateCharacters() {
    console.log('updateCharacters');
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

  render() {
    const { searchValue, cart, favorites, isLoading, characters } = this.state;
    return (
      <div className="list-with-search">
        <SearchBar onInput={this.onInput} value={searchValue} />
        {isLoading ? (
          <p>LOADING...</p>
        ) : (
          <ItemList
            items={characters}
            cart={cart}
            favorites={favorites}
            onAddToCart={this.onAddToCart}
            onClickFavorite={this.onClickFavorite}
          />
        )}
      </div>
    );
  }
}

export default ListWithSearch;
