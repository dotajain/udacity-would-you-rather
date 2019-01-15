import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

const AuthorDetail = ({ avatarURL, name, timestamp }) => (
  <div className="user-info">
    <div
      className="user-avatar"
      style={{
        backgroundImage: `url('${avatarURL}')`,
      }}
    />
    <div className="user-name">
      <span className="asked">
        Author: <strong>{name}</strong>
      </span>
      <span className="posted-date">
        Posted Date: <time>{moment(timestamp).format('MMMM Do, YYYY')}</time>
      </span>
    </div>
  </div>
)
AuthorDetail.propTypes = {
  avatarURL: PropTypes.string,
  name: PropTypes.string,
  timestamp: PropTypes.number,
}

export default AuthorDetail
