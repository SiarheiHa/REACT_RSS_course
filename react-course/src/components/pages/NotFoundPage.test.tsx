import { render, screen } from '@testing-library/react';
import React from 'react';
import NotFoundPage from './notfound';

describe('NotFoundPage', () => {
  it('NotFoundPage renders', () => {
    render(<NotFoundPage />);
    expect(screen.getByText('NotFoundPage')).toBeInTheDocument();
  });
});
