import { render } from '@testing-library/react';
import React from 'react';
import FormContainer from './FormContainer';

describe('FormContainer', () => {
  it('FormContainer renders', () => {
    render(<FormContainer />);
    // expect(screen.getAllByRole('link').length).toEqual(4);
  });
});
