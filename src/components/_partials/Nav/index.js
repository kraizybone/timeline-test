import React from 'react';

import NavItem from './item';

export default () => (
  <nav className="nav-site">
    <ul className="list-reset nav-site__items">
      <NavItem to="/dashboard">Dashboard</NavItem>
    </ul>
  </nav>
);
