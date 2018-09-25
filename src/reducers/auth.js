import {actionTypes as types} from '../constants'

const auth = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, id: action.id, error: false }
    case types.LOGIN_FAILURE:
      return { ...state, error: true, id: '' }
    default:
      return state
  }
}

export default auth