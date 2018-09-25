import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { getUsers } from '../actions/users';

import Login from './Auth/Login';

import Home from './Home';

class App extends Component {
  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }
  render () {
    const { auth, loadingBar } = this.props;
    return (
      <Fragment>
        <LoadingBar style={{ backgroundColor: '#f44336', height: '5px' }} />
        {
          loadingBar.default === 0 &&
          <Router>
            <Switch>
              {auth.id && <Route path="/" component={Home} />}
              <Route
                path="/login"
                exact
                component={Login}
              />
              <Route path="/" component={Login} />
          </Switch>
          </Router>
        }
      </Fragment>
    )
  }
}

App.propTypes = {
  getUsers: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired,
  loadingBar: PropTypes.shape({}).isRequired,
}

export default connect(state => ({ auth: state.auth, loadingBar: state.loadingBar }), { getUsers })(App)
