import ProductCard from 'components/productCard';
import { Product } from 'data/data';
import React from 'react';

import './itemList.scss';

const ItemList = ({ items }: { items: Product[] }) => {
  return (
    <>
      <p>ItemList</p>
      <div className="item-list">
        {items.map((item) => {
          return <ProductCard product={item} key={item._id} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
