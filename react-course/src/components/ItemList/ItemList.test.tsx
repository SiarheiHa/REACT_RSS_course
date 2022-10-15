import { render, screen } from '@testing-library/react';
import React from 'react';
import ItemList from './ItemList';

const testItems = [
  {
    _id: '5cd99d4bde30eff6ebccfc15',
    height: '1.06m (3\'6")',
    race: 'Hobbit',
    gender: 'Male',
    birth: '22 September ,TA 2968',
    spouse: '',
    death: 'Unknown (Last sighting ,September 29 ,3021,) (,SR 1421,)',
    realm: '',
    hair: 'Brown',
    name: 'Frodo Baggins',
    wikiUrl: 'http://lotr.wikia.com//wiki/Frodo_Baggins',
  },
  {
    _id: '5cd99d4bde30eff6ebccfea0',
    height: '',
    race: 'Maiar',
    gender: 'Male',
    birth: 'Before the the Shaping of Arda',
    spouse: '',
    death: 'January 253019 ,Battle of the Peak immortal',
    realm: '',
    hair: 'Grey, later white',
    name: 'Gandalf',
    wikiUrl: 'http://lotr.wikia.com//wiki/Gandalf',
  },
  {
    _id: '5cd99d4bde30eff6ebccfd06',
    height: 'Tall',
    race: 'Elf',
    gender: 'Female',
    birth: 'YT 1362',
    spouse: 'Celeborn',
    death: 'Still alive: Departed over the sea on ,September 29 ,3021',
    realm: 'Eregion,Lothlórien,Caras Galadhon',
    hair: 'Golden',
    name: 'Galadriel',
    wikiUrl: 'http://lotr.wikia.com//wiki/Galadriel',
  },
];

describe('ItemList', () => {
  it('item list renders', () => {
    render(<ItemList items={testItems} onClick={jest.fn()} />);
    //expect testItems.length + 2 (library wrapper + ItemList wrapper)
    expect(screen.getAllByRole('generic').length).toEqual(testItems.length + 2);
  });
});
