import ItemList from 'components/itemList';
import SearchBar from 'components/searchBar';
import { data, Product } from 'data/data';
import React, { Component } from 'react';

import './listWithSearch.scss';

type ListWithSearchState = {
  products: Product[];
};

class ListWithSearch extends Component<Record<string, never>, ListWithSearchState> {
  state = {
    products: data,
  };

  render() {
    const { products } = this.state;
    return (
      <div className="list-with-search">
        <p>ListWithSearch</p>
        <SearchBar />
        <ItemList items={products} />
      </div>
    );
  }
}

export default ListWithSearch;
