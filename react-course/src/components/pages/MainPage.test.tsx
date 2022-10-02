import { render, screen } from '@testing-library/react';
import React from 'react';
import MainPage from './main';

describe('MainPage', () => {
  it('MainPage renders', () => {
    render(<MainPage />);
    expect(screen.getByText('MainPage')).toBeInTheDocument();
  });
});
