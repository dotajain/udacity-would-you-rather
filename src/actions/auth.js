import { showLoading, hideLoading } from 'react-redux-loading-bar';

import {actionTypes as types} from '../constants'

export const login = ({ selectedUser, username, password }) => dispatch => {
    dispatch(showLoading());
    if (selectedUser === username) {
        dispatch({ type: types.LOGIN });
    } else {
        dispatch({ type: types.LOGIN_FAILURE, id: username });
    }
    dispatch(hideLoading());
}