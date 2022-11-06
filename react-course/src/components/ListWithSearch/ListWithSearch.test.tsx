import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { testResponse } from '../../mocks/testData';
// import { CharactersState } from 'context';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';

class LocalStorageMock {
  store: Record<string, string> = {};

  key(index: number) {
    return Object.keys(this.store)[index] || null;
  }

  get length() {
    return Object.keys(this.store).length;
  }

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}

const localStorageMock = new LocalStorageMock();

describe('ListWithSearch', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });
  beforeEach(() => {
    localStorage.clear();
  });

  it('ListWithSearch renders', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('LocalStorage saves value', () => {
    const { unmount } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'frodo');
    userEvent.keyboard('{Enter}');
    expect(screen.getByDisplayValue(/frodo/)).toBeInTheDocument();
    unmount();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(localStorage.getItem('search')).toBe('frodo');
  });

  it('spinner renders first, then context renders and spinner removs', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    expect(await screen.findByText(testResponse.docs[0].name)).toBeInTheDocument();
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });

  it('if item is not found renders message about it', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'fakeTestName');
    userEvent.keyboard('{Enter}');
    expect(await screen.findByText('no reluts')).toBeInTheDocument();
  });

  it('error message renders on server error', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'invalidPath');
    userEvent.keyboard('{Enter}');
    expect(await screen.findByText('Oops! Something went wrong...')).toBeInTheDocument();
  });
});
