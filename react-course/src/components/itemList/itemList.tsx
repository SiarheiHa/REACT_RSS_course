import ProductCard from 'components/productCard';
import { Product } from 'data/data';
import React from 'react';

const ItemList = ({ items }: { items: Product[] }) => {
  return (
    <>
      <p>ItemList</p>
      {items.map((item) => {
        return <ProductCard product={item} key={item._id} />;
      })}
    </>
  );
};

export default ItemList;
