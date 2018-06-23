import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ReduxToastr, { toastr } from 'react-redux-toastr';

import Dashboard from './Dashboard';
import { clearErrorMessage } from '../actions/AppAction';

import Overlay from './_partials/Overlay';
import Spinner from './_partials/Spinner';
import Header from './_partials/Header';

class Layout extends Component {
  componentDidUpdate() {
    const { loading, error, showErrorMessage, clearErrorMessage } = this.props;
    if (!loading && error) {
      showErrorMessage(error);
      clearErrorMessage();
    }
  }
  render() {
    const { loading } = this.props;
    return (
      <div className="page">
        <Header />
        <main className="main-content">
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
          {loading ? (
            <Overlay>
              <Spinner />
            </Overlay>
          ) : (
            ''
          )}
          <ReduxToastr timeOut={4000} transitionIn="fadeIn" transitionOut="fadeOut" progressBar />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.app.loading,
    error: state.app.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showErrorMessage: message => {
      toastr.error(message);
    },
    clearErrorMessage: () => {
      dispatch(clearErrorMessage());
    }
  };
};

const LayoutConnected = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default LayoutConnected;
