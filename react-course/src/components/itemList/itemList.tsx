import React from 'react';
import ProductCard from 'components/productCard';
import { Product } from 'data/data';

import './itemList.scss';

const ItemList = ({ items }: { items: Product[] }) => {
  return (
    <div className="item-list">
      {items.map((item) => {
        return <ProductCard product={item} key={item._id} />;
      })}
    </div>
  );
};

export default ItemList;
