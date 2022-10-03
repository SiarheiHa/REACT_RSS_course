import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <header>
      <NavLink end to="/">
        Main
      </NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/404">404</NavLink>
    </header>
  );
};

export default Header;
