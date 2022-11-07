import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from 'utils/test-utils';
import MainPage from './MainPage';

describe('MainPage', () => {
  beforeEach(() => {
    renderWithProviders(<MainPage />);
  });

  it('MainPage renders', () => {
    expect(screen.getByText('MainPage')).toBeInTheDocument();
  });
});
