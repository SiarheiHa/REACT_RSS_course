import { Product } from 'data/data';
import React, { Component } from 'react';

import './productCard.scss';
import favoriteIcon from './favoriteIcon.svg';

type ProductCardState = {
  favorite: boolean;
  inCart: boolean;
};

type ProductCardProps = {
  product: Product;
};

class ProductCard extends Component<ProductCardProps, ProductCardState> {
  render() {
    const { set, images, price, ages, pieces, rating } = this.props.product;
    return (
      <div className="product">
        <img className="favorite-icon" src={favoriteIcon} alt="favorite icon" width="40" />
        <p className="product__title">{set}</p>
        <div className="product__img-wrapper">
          <img className="product__img" src={images[0]} alt="product image" />
        </div>
        <p className="product__price">{`$${price}`}</p>
        <p className="product__ages">{`age:${ages}`}</p>
        <p className="product__pieces">{`pieces:${pieces}`}</p>
        <p className="product__rating">{`rating:${Number(rating).toFixed(2)}`}</p>
        <button className="button"></button>
      </div>
    );
  }
}

export default ProductCard;
