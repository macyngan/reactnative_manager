import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import Router from './Router'

class App extends Component {

  componentWillMount() {
    const config = {
        apiKey: 'xxxxxx',
        authDomain: 'reactnative-manager-13ceb.firebaseapp.com',
        databaseURL: 'https://reactnative-manager-13ceb.firebaseio.com',
        projectId: 'reactnative-manager-13ceb',
        storageBucket: 'reactnative-manager-13ceb.appspot.com',
        messagingSenderId: '358647165342'
    }

    firebase.initializeApp(config)

/*
    firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        this.setState({loggedIn: true})
      }else{
        this.setState({loggedIn: false})
      }
    })
*/
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return(
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
