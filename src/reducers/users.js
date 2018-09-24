import {actionTypes as types} from '../constants'

const users = (state = {}, action) => {
  switch (action.type) {
    case types.USER_SUCCESS:
      return action.data
    case types.USER_FAILURE:
      return {}
    default:
      return state
  }
}

export default users