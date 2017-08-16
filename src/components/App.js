import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

//Components
import config from '../firebaseAPI.js'
import Albums from './Albums'
import LoginForm from './LoginForm'
import { Button, Header, Spinner, CardItem } from './common'
class App extends Component {
  state = { loggedIn: null}

  componentWillMount () {
    firebase.initializeApp( config )

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Albums/>
        //   <CardItem>
        //     <Button onPress={() => firebase.auth().signOut()}>
        //       Log Out
        //     </Button>
        // </CardItem>
        )
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render () {
    return (
      <View>
        <Header headerText={'Authentication'}/>
          {this.renderContent()}
      </View>
    )
  }
}

export default App
