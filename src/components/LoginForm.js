import React, { Component } from 'react'
import firebase from 'firebase'
import { View, Text } from 'react-native'
import { Button, Card, CardItem, Input } from './common'

class LoginForm extends Component {
  // constructor (props) {
  //   super(props)

  // }
  state = { email: "", password: "", error: ""}
  //the onButtonPress will attempt to authenticate the user, if that does not work then it will try to
  // create a new user otherwise it will display an error
  onButtonPress(){
    const {email, password } = this.state
    this.setState({error: ''})
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch( () => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(() => {
        this.setState({error: 'Authentication Failed!'})
      })
    })
  }

  render () {
    return (
        <Card>
          <CardItem>
            <Input
              placeholder='user@gmail.com'
              label={'Email'}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              />
          </CardItem>
          <CardItem>
            <Input
              secureTextEntry
              placeholder='password'
              label={"Password"}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardItem>
          <Text style={styles.errorTextStyle}>{this.state.error}</Text>
          <CardItem>
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
          </CardItem>
        </Card>
    )
  }
}

styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
export default LoginForm
