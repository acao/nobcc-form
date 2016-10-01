import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  routing: routerReducer,
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
})
