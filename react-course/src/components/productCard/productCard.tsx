import React from 'react';
import { Product } from 'data/data';

import './productCard.scss';
import favoriteIcon from './favoriteIcon.svg';

type ProductCardProps = {
  product: Product;
  onAddToCart: (item: Product) => void;
  onClickFavorite: (item: Product) => void;
  isInCart: boolean;
  isInFavorites: boolean;
};

function ProductCard(props: ProductCardProps) {
  const { set, images, price, ages, pieces, rating } = props.product;
  return (
    <div className="product">
      <img
        onClick={() => props.onClickFavorite(props.product)}
        className={props.isInFavorites ? 'favorite-icon favorite-icon_active' : 'favorite-icon'}
        src={favoriteIcon}
        alt="favorite icon"
        width="40"
      />
      <p className="product__title">{set}</p>
      <div className="product__img-wrapper">
        <img className="product__img" src={images[0]} alt="product image" />
      </div>
      <p className="product__price">{`$ ${price}`}</p>
      <p className="product__ages">{`age: ${ages}`}</p>
      <p className="product__pieces">{`pieces: ${pieces}`}</p>
      <p className="product__rating">{`rating: ${Number(rating).toFixed(2)}`}</p>
      <button
        onClick={() => props.onAddToCart(props.product)}
        className={props.isInCart ? 'button button_active' : 'button'}
      ></button>
    </div>
  );
}

export default ProductCard;
