import { actionTypes as types } from '../constants'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { getAllUsers } from '../utils/api'
// import { hideLoading } from 'react-redux-loading-bar';

const usersAction = users => {
  return {
    type: types.GET_USERS,
    users,
  }
}

export const getUsers = () => dispatch => {
  // dispatch(showLoading());
  getAllUsers().then((res, err) => {
    dispatch(usersAction(res))
  })
}
export const getAllUsersData = () => dispatch => {
  dispatch(showLoading())
  getAllUsers()
    .then((res, err) => {
      dispatch(usersAction(res))
    })
    .then(() => dispatch(hideLoading()))
}

export const setUser = user => dispatch => {
  dispatch({ type: types.SELECTED_USER, user: user })
}

export const addUserQuestion = (loginUser, questionId) => {
  return {
    type: types.ADD_USER_QUESTION,
    loginUser,
    questionId,
  }
}
