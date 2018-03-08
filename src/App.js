import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

class App extends Component {

  componentWillMount() {
    const config = {
        apiKey: 'xxxxxxxxxxxxxxxx',
        authDomain: 'reactnative-manager-13ceb.firebaseapp.com',
        databaseURL: 'https://reactnative-manager-13ceb.firebaseio.com',
        projectId: 'reactnative-manager-13ceb',
        storageBucket: 'reactnative-manager-13ceb.appspot.com',
        messagingSenderId: '358647165342'
    }

    firebase.initializeApp(config)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
