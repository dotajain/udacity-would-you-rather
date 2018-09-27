import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';

const QuestionCard = ({ question, users }) => {
  const optionOneVoteUser = _.map(question.optionOne.votes, (user, i) => 
    <span className="badge" key={i}>{users[user].name}</span>
  )
  const optionTwoVoteUser = _.map(question.optionTwo.votes, (user, i) => 
  <span className="badge" key={i}>{users[user].name}</span>
)
  return (
    <div className="col-sm-4">
      <div className="card border-secondary mb-4">
        <div className="card-header">
          <div className="user-info">
            <div className="user-avatar" style={{ backgroundImage: `url('${users[question.author].avatarURL}')` }} />
            <div className="user-name">{users[question.author].name}</div>
            <div className="question-date">
              {moment(question.timestamp).format("MMMM Do, YYYY")}
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5>Questions: <small>Please select your answer</small></h5>
          <div className="questions">
            <div className="question-option">
              <h3>Option 1</h3>
              <div className="question-text">
                {question.optionOne.text}
              </div>
              {
                !_.isEmpty(question.optionOne.votes) &&
                <div className="vote-by">
                  {optionOneVoteUser}
                </div>
              }
            </div>
            <div className="question-option">
              <h3>Option 2</h3>
              <div className="question-text">
                {question.optionTwo.text}
              </div>
              {
                !_.isEmpty(question.optionTwo.votes) &&
                <div className="vote-by">
                  {optionTwoVoteUser}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

QuestionCard.propTypes = {
  question: PropTypes.shape({}).isRequired,
  users: PropTypes.shape({}).isRequired,
}
const mapStateToProps = state => ({
  questions: state.questions,
  users: state.users.all,
})
export default connect(mapStateToProps)(QuestionCard)


