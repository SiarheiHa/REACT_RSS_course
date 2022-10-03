import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ProductCard from './ProductCard';

const testProduct = {
  _id: '61df944eb226bd9df3bb4648',
  set: 'TEST The Razor Crest',
  item_id: 752927529275292,
  reviews: 134,
  rating: '4.605769230769231',
  availability: 'Available now',
  price: 129,
  images: [
    'https://www.lego.com/cdn/cs/set/assets/blt7a4292faec34e557/75292.png?fit=bounds&format=png&width=455&height=315&dpr=1',
    'https://www.lego.com/cdn/cs/set/assets/blt077af3aa46f9b42b/102620-TOTY-SEAL-Winner.jpg?fit=bounds&format=jpg&quality=80&width=455&height=315&dpr=1',
  ],
  ages: '10+',
  pieces: 1023,
  __v: 0,
};

const productCardPropsMock = {
  product: testProduct,
  onAddToCart: jest.fn(),
  onClickFavorite: jest.fn(),
};

describe('productCard', () => {
  it('card renders', () => {
    render(<ProductCard {...productCardPropsMock} isInCart={false} isInFavorites={false} />);
    expect(screen.getByAltText(/favorite icon/)).toBeInTheDocument();
    expect(screen.getByText(/TEST/)).toBeInTheDocument();
    expect(screen.getByAltText(/product image/)).toBeInTheDocument();
    expect(screen.getByText(/\$/i)).toBeInTheDocument();
    expect(screen.getByText(/age/i)).toBeInTheDocument();
    expect(screen.getByText(/rating/i)).toBeInTheDocument();
    expect(screen.getByText(/pieces/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('click on favorite icon works', () => {
    render(<ProductCard {...productCardPropsMock} isInCart={false} isInFavorites={false} />);
    const favoriteIcon = screen.getByAltText(/favorite icon/i);
    userEvent.click(favoriteIcon);
    expect(productCardPropsMock.onClickFavorite).toBeCalledTimes(1);
  });
  it('click on button works', () => {
    render(<ProductCard {...productCardPropsMock} isInCart={false} isInFavorites={false} />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(productCardPropsMock.onAddToCart).toBeCalledTimes(1);
  });
  it('active class is applied correctly to favorite-icon', () => {
    render(<ProductCard {...productCardPropsMock} isInCart={true} isInFavorites={true} />);
    const favoriteIcon = screen.getByAltText(/favorite icon/i);
    expect(favoriteIcon).toHaveClass('favorite-icon_active');
  });
  it('active class is applied correctly to button', () => {
    render(<ProductCard {...productCardPropsMock} isInCart={true} isInFavorites={true} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button_active');
  });
});
