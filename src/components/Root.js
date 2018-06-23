import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './Layout';
import createHashHistory from 'history/createHashHistory';
import PropTypes from 'prop-types';

const history = createHashHistory();

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Redirect exact="/" from="/" to="/dashboard" />
          <Route path="/" component={Layout} />
        </Switch>
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
