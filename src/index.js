import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'
import setBaseUrl from './utils/setBaseUrl'

import history from '../src/utils/history'
import App from './App'
import * as serviceWorker from './serviceWorker'
import rootSaga from './sagas'
import { configLanguage } from './config'

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare, thunk))
)
sagaMiddleWare.run(rootSaga)

if (process.env.REACT_APP_API_URL) {
  setBaseUrl(process.env.REACT_APP_API_URL)
}

configLanguage(store)

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
