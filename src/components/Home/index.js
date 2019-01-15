import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import QuestionCard from './QuestionCard'

const Home = ({ questions, user }) => {
  const userHasAnswered = Object.keys(questions.all)
    .filter(
      i =>
        questions.all[i].optionOne.votes.includes(user.id) ||
        questions.all[i].optionTwo.votes.includes(user.id),
    )
    .sort((a, b) => questions.all[b].timestamp - questions.all[a].timestamp)

  const userHasNotAnswered = Object.keys(questions.all)
    .filter(
      i =>
        !questions.all[i].optionOne.votes.includes(user.id) &&
        !questions.all[i].optionTwo.votes.includes(user.id),
    )
    .sort((a, b) => questions.all[b].timestamp - questions.all[a].timestamp)

  const unAnsweredQuestions = _.map(userHasNotAnswered, (id, key) => (
    <QuestionCard key={key} question={questions.all[id]} userId={user.id} />
  ))
  const answeredQuestions = _.map(userHasAnswered, (id, key) => (
    <QuestionCard
      key={key}
      question={questions.all[id]}
      userId={user.id}
      answered
    />
  ))
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="mb-5">Unanswered Questions</h2>
          <div className="u-q">{unAnsweredQuestions}</div>
        </div>
        <div className="col">
          <h2 className="mb-5">Answered Questions</h2>
          <div className="u-a">{answeredQuestions}</div>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  questions: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
}
const mapStateToProps = state => ({
  questions: state.questions,
  user: state.users.selectedUser,
})
export default connect(mapStateToProps)(Home)
