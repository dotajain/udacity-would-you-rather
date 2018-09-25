import React from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';

import Form from './Form';
import UserCard from './UserCard';

const Login = (props) => {
  const { users, selectedUser} = props;
  let userList;
  if(!_.isEmpty(users)) {
    userList = _.map(users).map(user => {
      const avatarUrl = {
        backgroundImage: `url("${user.avatarURL}")`
      }
      return (
        <UserCard 
          key={user.id}
          avatar={avatarUrl}
          user={user}
          selectedUser={selectedUser && selectedUser.id}
        />
      )
    });
  }
  return (
    <div className="login">
      <div className="content-center">
        <div className="login-card">
          <div className="login-card-left">
            <div className="login-card-header">
              <h1>Would You Rather</h1>
              <h2>Sign in</h2>
              <p>to continue to play</p>
            </div>
            <div className="login-users">
              {userList}
            </div>
          </div>
          <div className="login-card-right">
            <div className="login-card-header">
              <h2>Sign in with <span>{selectedUser && selectedUser.name}</span></h2>
              <p>to continue to play</p>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({users: state.users.all, selectedUser:state.users.selectedUser })
export default connect(mapStateToProps, {})(Login)
