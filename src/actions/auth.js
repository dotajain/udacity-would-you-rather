import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { actionTypes as types } from '../constants'
import { setUser } from './users';

export const login = ({ selectedUser, username, password }) => dispatch => {
  dispatch(showLoading());
  if (selectedUser === username) {
    dispatch({ type: types.LOGIN, id: username, password: password });
  } else {
    dispatch({ type: types.LOGIN_FAILURE });
  }
  dispatch(hideLoading());
}

export const loginWithToken = () => (dispatch, getState) => {
  const username = getState().auth.id
  if (!username) return
  dispatch({ type: types.LOGIN, id: username });
  dispatch(hideLoading());
}

export const logout = () => dispatch => {
  dispatch({ type: types.LOGOUT });
  dispatch(setUser(null));
}