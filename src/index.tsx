import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { BrowserRouter } from 'react-router-dom'
// import createBrowserHistory from 'history/createBrowserHistory'

import Routes from './App';
import { Provider } from 'react-redux';
import Store from './store/configureStore'

import './index.css';
import 'typeface-roboto'

const appStore = Store


// const store = createStore<ApplicationState, AllActions, any, any>(rootReducer, {
//   enthusiasmLevel: 1,
//   languageName: 'TypeScript',
// },
// composeEnhancers());

// const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={appStore}>
    <Routes />
  </Provider>,
  document.getElementById('root') as HTMLElement
);