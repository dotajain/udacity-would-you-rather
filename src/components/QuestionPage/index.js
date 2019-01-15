import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { registerVote } from '../../actions/questions'
import QuestionDetails from './QuestionDetails'
import AuthorDetail from '../common/AuthorDetail'

const QuestionPage = ({
  match,
  history,
  questions,
  users,
  userId,
  registerVote,
}) => {
  const questionId = match.params.id
  const question = questions.all[questionId]
  const answered =
    question.optionOne.votes.includes(userId) ||
    question.optionTwo.votes.includes(userId)
  const handleRegisterVote = obj => {
    registerVote(obj)
    history.push('/')
  }
  return (
    <div className="col-sm-4 m-auto">
      <h3 className="text-center mb-5">
        {answered ? 'Vote Details' : 'Vote Your Option'}
      </h3>
      <div className="card border-secondary mb-4">
        <div className="card-header">
          <AuthorDetail
            avatarURL={users[question.author].avatarURL}
            name={users[question.author].name}
            timestamp={question.timestamp}
          />
        </div>
        <div className="card-body">
          <div className="select-options">
            <QuestionDetails
              question={question.optionOne}
              registerVote={handleRegisterVote}
              users={users}
              qId={question.id}
              qOption="optionOne"
              answered={answered}
            />
            <QuestionDetails
              question={question.optionTwo}
              registerVote={registerVote}
              users={users}
              qId={question.id}
              qOption="optionTwo"
              answered={answered}
            />
          </div>
        </div>
      </div>
      <Link to="/">&lt; Go home</Link>
    </div>
  )
}

QuestionPage.propTypes = {
  users: PropTypes.shape({}).isRequired,
  userId: PropTypes.string,
  registerVote: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
}
const mapStateToProps = state => ({
  questions: state.questions,
  users: state.users.all,
  userId: state.users.selectedUser.id,
})
export default connect(
  mapStateToProps,
  { registerVote },
)(QuestionPage)
