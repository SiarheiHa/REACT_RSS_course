import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import ListWithSearch from './ListWithSearch';
import { testResponse } from '../../mocks/testData';

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
    render(<ListWithSearch />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
  it('LocalStorage saves value', () => {
    const { unmount } = render(<ListWithSearch />);
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'frodo');
    userEvent.keyboard('{Enter}');
    unmount();
    render(<ListWithSearch />);
    expect(screen.getByDisplayValue(/frodo/)).toBeInTheDocument();
  });

  it('spinner renders first, then context renders and spinner removs', async () => {
    render(<ListWithSearch />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    expect(await screen.findByText(testResponse.docs[0].name)).toBeInTheDocument();
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });

  it('if item is not found renders message about it', async () => {
    render(<ListWithSearch />);
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'fakeTestName');
    userEvent.keyboard('{Enter}');
    expect(await screen.findByText('no reluts')).toBeInTheDocument();
  });

  it('error message renders on server error', async () => {
    render(<ListWithSearch />);
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'invalidPath');
    userEvent.keyboard('{Enter}');
    expect(await screen.findByText('Oops! Something went wrong...')).toBeInTheDocument();
  });
});
