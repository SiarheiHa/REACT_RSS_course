import { cleanup, screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it('App renders', () => {
    expect(screen.getAllByRole('link').length).toEqual(4);
  });

  it('Link to About page works', () => {
    const link = screen.getByText(/about/i);
    userEvent.click(link);
    expect(screen.getByText('AboutPage')).toBeInTheDocument();
  });

  it('Link to Main page works', () => {
    let link = screen.getByText(/404/i);
    userEvent.click(link);
    link = screen.getByText(/main/i);
    userEvent.click(link);
    expect(screen.getByText('MainPage')).toBeInTheDocument();
  });

  it('Link to NotFoundPage works', () => {
    const link = screen.getByText(/404/i);
    userEvent.click(link);
    expect(screen.getByText('NotFoundPage')).toBeInTheDocument();
  });

  it('redirect to 404 works', () => {
    cleanup();
    renderWithProviders(
      <MemoryRouter initialEntries={['/invalidurl']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('NotFoundPage')).toBeInTheDocument();
  });
});
