import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { getUsers } from '../actions/users';
// import { Route, Redirect, withRouter, Switch } from 'react-router-dom'

import Login from './Auth/Login';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getUsers());
  }
  render () {
    return (
      <Fragment>
        <LoadingBar style={{ backgroundColor: '#f44336', height: '5px' }} />
        <Login/>
      </Fragment>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(App);
