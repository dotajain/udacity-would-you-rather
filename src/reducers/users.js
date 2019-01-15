import { actionTypes as types } from '../constants'

const users = (state = {}, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return { ...state, all: action.users }
    case types.SELECTED_USER:
      return { ...state, selectedUser: action.user }
    case types.ADD_USER_QUESTION:
      return {
        ...state,
        all: {
          ...state.all,
          [action.loginUser]: {
            ...state.all[action.loginUser],
            questions: state.all[action.loginUser].questions.concat([
              action.questionId,
            ]),
          },
        },
        selectedUser: {
          ...state.selectedUser,
          questions: state.selectedUser.questions.concat([action.questionId]),
        },
      }
    default:
      return state
  }
}

export default users
