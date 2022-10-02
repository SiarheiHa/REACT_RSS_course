import { render, screen } from '@testing-library/react';
import { debug } from 'console';
import React from 'react';
import ItemList from './itemList';

const testItems = [
  {
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
  },
  {
    _id: '61df944eb226bd9df3bb4648',
    set: 'TEST1 The Razor Crest',
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
  },
  {
    _id: '61df944eb226bd9df3bb4648',
    set: 'TEST2 The Razor Crest',
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
  },
];

describe('ItemList', () => {
  it('item list renders', () => {
    debug();
    render(
      <ItemList
        items={testItems}
        cart={[]}
        favorites={[]}
        onAddToCart={jest.fn()}
        onClickFavorite={jest.fn()}
      />
    );
    expect(screen.getAllByRole('generic').length).toEqual(8);
  });
});
