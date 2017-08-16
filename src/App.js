import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from  './reducers'

//Components
import config from './firebaseAPI.js'
import Albums from './components/Albums'
import LoginForm from './components/LoginForm'
import { Button, Header, Spinner, CardItem } from './components/common'

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
          <View style={{paddingBottom: 350}}>
            <Header headerText={'Albums'}/>
            <CardItem>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardItem>
          <CardItem>
              <Albums/>
          </CardItem>
          </View>
        )
      case false:
        return (
          <View>
            <Header headerText={'Authentication'}/>
            <LoginForm />
          </View>
        )
      default:
        return <Spinner size='large' />;
    }
  }

  render () {
    return (
      <Provider store={createStore(reducers)}>
        <View>
            {this.renderContent()}
        </View>
      </Provider>
    )
  }
}

export default App
