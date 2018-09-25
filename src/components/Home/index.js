import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Home = (props) => (
  <button className="btn btn-primary" onClick={() => props.dispatch(logout())}>Logout</button>
);

Home.proptypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(Home);
