import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

import AuthorDetail from '../common/AuthorDetail'

const QuestionCard = ({ question, users, userId, answered }) => {
  const renderVoteUser = votes =>
    _.map(votes, (user, i) => (
      <span
        className={`badge ${
          user === userId ? 'badge-primary' : 'badge-secondary'
        }`}
        key={i}
      >
        {users[user].name}
      </span>
    ))

  const renderOptions = option => (
    <div
      className={`question-option ${
        option.votes.includes(userId) ? 'active' : ''
      }`}
    >
      <div className="question-text">
        Would you rather <strong>{option.text}</strong>
      </div>
      {!_.isEmpty(option.votes) && (
        <div className="vote-by">{renderVoteUser(option.votes)}</div>
      )}
    </div>
  )

  return (
    <div className="card border-secondary mb-4">
      <div className="card-header">
        <AuthorDetail
          avatarURL={users[question.author].avatarURL}
          name={users[question.author].name}
          timestamp={question.timestamp}
        />
      </div>
      <div className="card-body">
        <div className="questions">
          {renderOptions(question.optionOne)}
          {renderOptions(question.optionTwo)}
        </div>
      </div>
      <div className="card-footer">
        <Link to={`/questions/${question.id}`} className="vote-question">
          {answered ? 'View Details' : 'Vote'}
        </Link>
      </div>
    </div>
  )
}

QuestionCard.propTypes = {
  question: PropTypes.shape({}).isRequired,
  users: PropTypes.shape({}).isRequired,
  userId: PropTypes.string,
  answered: PropTypes.bool,
}
const mapStateToProps = state => ({
  questions: state.questions,
  users: state.users.all,
})
export default connect(
  mapStateToProps,
  {},
)(QuestionCard)
