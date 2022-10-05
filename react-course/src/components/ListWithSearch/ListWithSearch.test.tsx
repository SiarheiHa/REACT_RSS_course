import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import ListWithSearch from './ListWithSearch';

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

  it('search works', () => {
    render(<ListWithSearch />);
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'Imperial Armored Marauder');
    const cardsCount = screen.getAllByRole('button').length;
    expect(cardsCount).toEqual(1);
  });

  it('LocalStorage saves value', () => {
    const { unmount } = render(<ListWithSearch />);
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'darth123456');
    unmount();
    render(<ListWithSearch />);
    expect(screen.getByDisplayValue(/darth123456/)).toBeInTheDocument();
  });

  it('add items to cart', () => {
    render(<ListWithSearch />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => userEvent.click(button));
    buttons.forEach((button) => {
      expect(button).toHaveClass('button_active');
    });
    buttons.forEach((button) => userEvent.click(button));
    buttons.forEach((button) => {
      expect(button).not.toHaveClass('button_active');
    });
  });

  it('add items  to favorits', () => {
    render(<ListWithSearch />);
    const favoriteIcons = screen.getAllByAltText('favorite icon');
    favoriteIcons.forEach((favoriteIcon) => userEvent.click(favoriteIcon));
    favoriteIcons.forEach((favoriteIcon) => {
      expect(favoriteIcon).toHaveClass('favorite-icon_active');
    });
    favoriteIcons.forEach((favoriteIcon) => userEvent.click(favoriteIcon));
    favoriteIcons.forEach((favoriteIcon) => {
      expect(favoriteIcon).not.toHaveClass('favorite-icon_active');
    });
  });
});
