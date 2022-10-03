import { render, screen } from '@testing-library/react';
import React from 'react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('about page renders', () => {
    render(<AboutPage />);
    expect(screen.getByText('AboutPage')).toBeInTheDocument();
  });
});
