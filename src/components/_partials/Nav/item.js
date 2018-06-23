import React from 'react';
import { Link, Route } from 'react-router-dom';

export default ({ to, children }) => {
  return (
    <Route
      path={to}
      exact
      children={({ match }) => (
        <li
          className={
            match ? 'nav-site__item nav-site__item_active' : 'nav-site__item'
          }
        >
          <Link to={to}>{children}</Link>
        </li>
      )}
    />
  );
};
