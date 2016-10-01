import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

const logger = createLogger()
const routeMiddleware = routerMiddleware(hashHistory)

const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(routeMiddleware, logger, thunk),

  // Required! Enable Redux DevTools with the monitors you chose
  // DevTools.instrument()
)(createStore)

function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)
  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers'))
    )
  }
  return store
}
export default configureStore()
