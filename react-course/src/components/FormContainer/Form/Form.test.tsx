import { render } from '@testing-library/react';
import React from 'react';
import FormContainer from './Form';

describe('Form', () => {
  it('Form renders', () => {
    render(<FormContainer />);
    // expect(screen.getAllByRole('link').length).toEqual(4);
  });
});
