import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

//Components
import config from '../firebaseAPI.js'
// import Albums from './Albums'
import LoginForm from './LoginForm'

class App extends Component {

  componentWillMount () {
    firebase.initializeApp( config )
  }

  render () {
    return (
      <LoginForm>
      </LoginForm>
    )
  }
}

export default App
