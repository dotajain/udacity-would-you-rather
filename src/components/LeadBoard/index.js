import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

// import UserCard from '../Auth/UserCard';

const LeadBoard = ({ leader }) => {
  console.log(leader)
  const userList = _.map(leader).map(user => {
    const avatarUrl = {
      backgroundImage: `url("${user.avatarURL}")`,
    }
    return (
      <li
        key={user.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span className="d-flex align-items-center col-6">
          <span className="user-avatar" style={avatarUrl} />
          <span className="user-name pl-3">{user.name}</span>
        </span>
        <span className="col-2 text-center">{user.created}</span>
        <span className="col-2 text-center">{user.answered}</span>
        <span className="col-2 text-center">
          <span className="badge badge-primary badge-pill">
            {user.answered + user.created}
          </span>
        </span>
      </li>
    )
  })
  return (
    <div className="container">
      <h2 className="text-center mb-5">LeadBoard</h2>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center border-0 active">
          <span className="col-6">User</span>
          <span className="col-2 text-center">Questions Created</span>
          <span className="col-2 text-center">Questions Answered</span>
          <span className="col-2 text-center">Score</span>
        </li>
      </ul>
      <ul className="list-group">{userList}</ul>
    </div>
  )
}

LeadBoard.propTypes = {
  leader: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = ({ users }) => {
  const leader = Object.keys(users.all)
    .map(id => ({
      id,
      created: users.all[id].questions.length,
      answered: Object.keys(users.all[id].answers).length,
      name: users.all[id].name,
      avatarURL: users.all[id].avatarURL,
    }))
    .sort((a, b) => b.created + b.answered - (a.created + a.answered))
  return {
    leader,
  }
}

export default connect(mapStateToProps)(LeadBoard)
