import {actionTypes as types} from '../constants'
import {
    _getUsers
} from '../utils/_DATA'

export const getUsers = () => dispatch => {
    dispatch({ type: types.USER_REQUEST })
    _getUsers().then((data, error) => {

        dispatch({ type: types.USER_SUCCESS, data})
    })
}
  