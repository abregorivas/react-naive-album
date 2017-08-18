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
import LibraryList from './components/LibraryList'

class App extends Component {
  state = {
    loggedIn: null,
    store: createStore(reducers)
    }

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
    console.log('state.store', this.state.store)
    console.log('state.stor.getState', this.state.store.getState())
    return (
      <Provider store={this.state.store}>
        <View>
            {/* {this.renderContent()} */}
            <LibraryList />
        </View>
      </Provider>
    )
  }
}

export default App
