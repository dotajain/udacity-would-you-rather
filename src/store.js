import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleWare = []
middleWare.push(thunk)

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
  });
  middleWare.push(loggerMiddleware)

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare)),
)

store.subscribe(throttle(() => store.getState(), 1000))