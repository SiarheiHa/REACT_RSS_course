import { render } from '@testing-library/react';
import React from 'react';
import CardListContainer from './CardList';

describe('CardList', () => {
  it('CardList renders', () => {
    render(<CardListContainer />);
    // expect(screen.getAllByRole('link').length).toEqual(4);
  });
});
