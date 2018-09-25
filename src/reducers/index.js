import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar';

import users from './users'

const rootReducer = combineReducers({
  users,
  loadingBar: loadingBarReducer,
})

export default rootReducer
