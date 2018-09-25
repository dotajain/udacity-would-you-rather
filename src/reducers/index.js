import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar';

import users from './users'
import auth from './auth'

const rootReducer = combineReducers({
  users,
  auth,
  loadingBar: loadingBarReducer,
})

export default rootReducer
