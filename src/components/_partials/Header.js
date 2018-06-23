import React from 'react';

import logo from '../../assets/images/logo.svg';

import { Link } from 'react-router-dom';
import Nav from './Nav/';

export default () => {
  return (
    <header className="header">
      <Link to="/dashboard" className="logo-site">
        <img src={logo} alt="logo" />
      </Link>
      <Nav />
    </header>
  );
};
