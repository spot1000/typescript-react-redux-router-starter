import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
​
import rootReducer from '../reducers/rootReducer'

function configureStore(initialState={}) {

  const composeEnhancers = composeWithDevTools({});
​
  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
}

const Store = configureStore()
​
export default Store