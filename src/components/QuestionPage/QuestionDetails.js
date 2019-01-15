import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const QuestionDetails = ({
  answered,
  question,
  userId,
  registerVote,
  users,
  qId,
  qOption,
}) => {
  const voteUser = question.votes.map((user, i) => (
    <span
      className={`badge ${
        user === userId ? 'badge-primary' : 'badge-secondary'
      }`}
      key={i}
    >
      {users[user].name}
    </span>
  ))
  const checkIcon = (
    <span className="check" title="Selected Answer">
      <svg width="24" height="24" fillRule="evenodd" clipRule="evenodd">
        <path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z" />
      </svg>
    </span>
  )
  return (
    <div
      className={`question-option ${
        question.votes.includes(userId) ? 'active' : ''
      }`}
    >
      <div className={answered ? 'answered-options' : 'custom-radio'}>
        <label htmlFor={`${qOption}_${qId}`}>
          {!answered && (
            <input
              name={qId}
              type="radio"
              value={question.text}
              checked={question.votes.includes(userId)}
              id={`${qOption}_${qId}`}
              onChange={() =>
                registerVote({ authedUser: userId, qid: qId, answer: qOption })
              }
            />
          )}
          <div className="question-text">{question.text}</div>
          {question.votes.length > 0 && (
            <div className="vote-by">{voteUser}</div>
          )}
          {question.votes.includes(userId) && checkIcon}
        </label>
      </div>
    </div>
  )
}

QuestionDetails.propTypes = {
  registerVote: PropTypes.func.isRequired,
  userId: PropTypes.string,
  qId: PropTypes.string,
  qOption: PropTypes.string,
  question: PropTypes.shape({}).isRequired,
  users: PropTypes.shape({}).isRequired,
  answered: PropTypes.bool,
}
const mapStateToProps = state => ({
  users: state.users.all,
  userId: state.users.selectedUser.id,
})
export default connect(
  mapStateToProps,
  {},
)(QuestionDetails)
