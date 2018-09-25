import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../actions/users';

const UserCard = props => {
  // console.log(props);
  const {avatar, user, selectedUser, dispatch} = props;
  return (
    <label className="user-radio d-flex" htmlFor={user.id}>
      <input
        type="radio"
        id={user.id}
        name="user"
        value={user.name} 
        onChange={
          () => dispatch(setUser(user))
        }
        checked={selectedUser === user.id && true} 
      />
      <span className="user-box d-flex align-items-center">
        <span className="user-avatar" style={avatar}></span>
        <span className="user-name pl-3">{user.name}</span>
      </span>
    </label>
  )
}

export default connect()(UserCard)
