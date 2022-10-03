import { render, screen } from '@testing-library/react';
import React from 'react';
import MainPage from './MainPage';

describe('MainPage', () => {
  it('MainPage renders', () => {
    render(<MainPage />);
    expect(screen.getByText('MainPage')).toBeInTheDocument();
  });
});
