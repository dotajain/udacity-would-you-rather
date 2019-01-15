import { actionTypes as types } from '../constants'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { getAllQuestions, saveQuestionAnswer, saveQuestion } from '../utils/api'
import { getUsers, addUserQuestion } from './users'

export const getQuestions = () => dispatch => {
  dispatch(showLoading())
  getAllQuestions()
    .then((res, err) => {
      dispatch({ type: types.GET_QUESTIONS, questions: res })
    })
    .then(() => dispatch(hideLoading()))
}

export const registerVote = ({ authedUser, qid, answer }) => dispatch => {
  const data = {
    authedUser,
    qid,
    answer,
  }
  dispatch({ type: types.REGISTER_VOTE_REQUEST, votedQuestion: data })
  saveQuestionAnswer(data).then(() => {
    dispatch(getUsers())
    dispatch(getQuestions())
  })
}

export const handleAddQuestion = ({
  userId,
  optionOneText,
  optionTwoText,
}) => dispatch => {
  dispatch(showLoading())
  saveQuestion({
    author: userId,
    optionOneText,
    optionTwoText,
  })
    .then(question => {
      dispatch({ type: types.ADD_QUESTION, question })
      dispatch(addUserQuestion(userId, question.id))
    })
    .then(() => dispatch(hideLoading()))
}
