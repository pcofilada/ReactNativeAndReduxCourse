import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'
import Router from './Router'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAUiQte0x93p3qBqhtdb85aPkT5V3rj4_c',
      authDomain: 'employee-f354f.firebaseapp.com',
      databaseURL: 'https://employee-f354f.firebaseio.com',
      storageBucket: 'employee-f354f.appspot.com',
      messagingSenderId: '325447184148'
    }

    firebase.initializeApp(config)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
