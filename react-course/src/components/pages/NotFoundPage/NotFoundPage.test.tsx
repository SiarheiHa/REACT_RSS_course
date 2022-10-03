import { render, screen } from '@testing-library/react';
import React from 'react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('NotFoundPage renders', () => {
    render(<NotFoundPage />);
    expect(screen.getByText('NotFoundPage')).toBeInTheDocument();
  });
});
