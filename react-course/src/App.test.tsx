import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('App renders', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getAllByRole('link').length).toEqual(3);
  });

  it('Link to About page works', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const link = screen.getByText(/about/i);
    userEvent.click(link);
    expect(screen.getByText('AboutPage')).toBeInTheDocument();
  });

  it('Link to Main page works', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    let link = screen.getByText(/404/i);
    userEvent.click(link);
    link = screen.getByText(/main/i);
    userEvent.click(link);
    expect(screen.getByText('MainPage')).toBeInTheDocument();
  });

  it('Link to NotFoundPage works', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const link = screen.getByText(/404/i);
    userEvent.click(link);
    expect(screen.getByText('NotFoundPage')).toBeInTheDocument();
  });

  it('redirect to 404 works', () => {
    render(
      <MemoryRouter initialEntries={['/invalidurl']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('NotFoundPage')).toBeInTheDocument();
  });
});
