import ItemList from 'components/itemList';
import SearchBar from 'components/searchBar';
import { data, Product } from 'data/data';
import React, { Component } from 'react';

import './listWithSearch.scss';

type ListWithSearchState = {
  products: Product[];
  searchValue: string;
};

class ListWithSearch extends Component<Record<string, never>, ListWithSearchState> {
  state = {
    products: data,
    searchValue: '',
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

  render() {
    const { products, searchValue } = this.state;
    return (
      <div className="list-with-search">
        <SearchBar onInput={this.onInput} value={searchValue} />
        <ItemList items={products} />
      </div>
    );
  }
}

export default ListWithSearch;
