import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import { getUsers } from '../action/user'

class App extends Component {
  componentDidMount() {
    this.props.getUsers()
  }
  render() {
    console.log(this.props.users);
    return (
      <div>
        Create React App Starter
      </div>
    );
  }
}


App.propTypes = {
  users: PropTypes.shape({}).isRequired,
  getUsers: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({ users: state.users })

export default connect(mapStateToProps, { getUsers })(App)
