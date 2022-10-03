import ItemList from 'components/ItemList';
import SearchBar from 'components/SearchBar';
import data from '../../data';
import { ListWithSearchState, Product } from 'types/types';

import React, { Component } from 'react';

import './ListWithSearch.scss';

class ListWithSearch extends Component<Record<string, never>, ListWithSearchState> {
  state = {
    products: data,
    searchValue: '',
    cart: [],
    favorites: [],
  };

  componentDidMount() {
    const searchValue = localStorage.getItem('search');
    if (searchValue) this.setState({ searchValue });
  }

  componentWillUnmount() {
    localStorage.setItem('search', this.state.searchValue);
  }

  onInput = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.currentTarget.value });
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

  render() {
    const { products, searchValue, cart, favorites } = this.state;
    const itemsToDraw = this.filterBySearch(products);
    return (
      <div className="list-with-search">
        <SearchBar onInput={this.onInput} value={searchValue} />
        <ItemList
          items={itemsToDraw}
          cart={cart}
          favorites={favorites}
          onAddToCart={this.onAddToCart}
          onClickFavorite={this.onClickFavorite}
        />
      </div>
    );
  }
}

export default ListWithSearch;
