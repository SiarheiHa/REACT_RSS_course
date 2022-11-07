import { cleanup, screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from 'App';
import { testResponse } from '../../mocks/testData';

describe('ListWithSearch', () => {
  beforeEach(() => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it('ListWithSearch renders', () => {
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('LocalStorage saves value', () => {
    cleanup();
    const { unmount } = renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'frodo');
    userEvent.keyboard('{Enter}');
    expect(screen.getByDisplayValue(/frodo/)).toBeInTheDocument();
    unmount();
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(localStorage.getItem('search')).toBe('frodo');
  });

  it('spinner renders first, then context renders and spinner removs', async () => {
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    expect(await screen.findByText(testResponse.docs[0].name)).toBeInTheDocument();
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });

  it('if item is not found renders message about it', async () => {
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'fakeTestName');
    userEvent.keyboard('{Enter}');
    expect(await screen.findByText('no reluts')).toBeInTheDocument();
  });

  it('error message renders on server error', async () => {
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'invalidPath');
    userEvent.keyboard('{Enter}');
    expect(await screen.findByText('Oops! Something went wrong...')).toBeInTheDocument();
  });
});
