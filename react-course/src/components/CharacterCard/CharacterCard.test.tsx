import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import CharacterCard from './CharacterCard';

const testCharacter = {
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
};

const characterCardPropsMock = {
  character: testCharacter,
  onClick: jest.fn(),
};

describe('characterCard', () => {
  it('basic card renders', () => {
    render(<CharacterCard {...characterCardPropsMock} />);
    expect(screen.getByText(/Frodo Baggins/i)).toBeInTheDocument();
    expect(screen.getByText(/hobbit/i)).toBeInTheDocument();
  });

  it('detail card renders', () => {
    render(<CharacterCard {...characterCardPropsMock} detail />);
    expect(screen.getByText(/Frodo Baggins/i)).toBeInTheDocument();
    expect(screen.getByText(/hobbit/i)).toBeInTheDocument();
    expect(screen.getByText(/birth: 22 September ,TA 2968/i)).toBeInTheDocument();
    expect(screen.getByText(/death: Unknown/i)).toBeInTheDocument();
    expect(screen.getByText(/gender: Male/i)).toBeInTheDocument();
    expect(screen.getByText(/hair: Brown/i)).toBeInTheDocument();
    expect(screen.getByText(/height: 1.06m/i)).toBeInTheDocument();
    expect(screen.getByText(/realm: no information/i)).toBeInTheDocument();
    expect(screen.getByText(/spouse: no information/i)).toBeInTheDocument();
    expect(screen.getByText(/Read more on/i)).toBeInTheDocument();
  });

  it('callback works', () => {
    render(<CharacterCard {...characterCardPropsMock} />);
    const generics = screen.getAllByRole('generic');
    expect(generics.length).toEqual(2);
    const card = generics[1];
    userEvent.click(card);
    expect(characterCardPropsMock.onClick).toBeCalled();
  });
});
