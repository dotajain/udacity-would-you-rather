import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import QuestionCard from './QuestionCard'

class Home extends Component {
  state = {
    activeTab: 0,
  }

  _handleToggle = activeTab => {
    this.setState({ activeTab })
  }

  render() {
    const { unAnsweredIds, answeredIds, questions, authUser } = this.props
    const { activeTab } = this.state

    const unAnsweredQuestions = _.map(unAnsweredIds, (id, key) => (
      <QuestionCard key={key} question={questions[id]} userId={authUser.id} />
    ))

    const answeredQuestions = _.map(answeredIds, (id, key) => (
      <QuestionCard
        key={key}
        question={questions[id]}
        userId={authUser.id}
        answered
      />
    ))

    return (
      <div className="container">
        <div className="row">
          <nav className="nav nav-pills nav-justified w-100 mb-5">
            <button
              onClick={() => this._handleToggle(0)}
              className={`nav-item nav-link btn ${
                activeTab === 0 ? 'active' : ' '
              }`}
            >
              Unanswered Questions
            </button>
            <button
              onClick={() => this._handleToggle(1)}
              className={`nav-item nav-link btn ${
                activeTab === 1 ? 'active' : ' '
              }`}
            >
              Answered Questions
            </button>
          </nav>

          <div className="col">
            <h2 className="mb-5 text-center">
              {activeTab === 0 ? 'Unanswered' : 'Answered'} Questions
            </h2>
            <div className="u-q w-50 m-auto">
              {activeTab === 0 ? unAnsweredQuestions : answeredQuestions}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  unAnsweredIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  answeredIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  questions: PropTypes.shape({}).isRequired,
  authUser: PropTypes.shape({}).isRequired,
}

const mapStateToProps = ({ questions, users }) => {
  const authUser = users.selectedUser
  const unAnsweredIds = Object.keys(questions.all)
    .filter(
      i =>
        !questions.all[i].optionOne.votes.includes(authUser.id) &&
        !questions.all[i].optionTwo.votes.includes(authUser.id),
    )
    .sort((a, b) => questions.all[b].timestamp - questions.all[a].timestamp)
  const answeredIds = Object.keys(questions.all)
    .filter(
      i =>
        questions.all[i].optionOne.votes.includes(authUser.id) ||
        questions.all[i].optionTwo.votes.includes(authUser.id),
    )
    .sort((a, b) => questions.all[b].timestamp - questions.all[a].timestamp)
  return {
    unAnsweredIds,
    answeredIds,
    questions: questions.all,
    authUser,
  }
}
export default connect(mapStateToProps)(Home)
