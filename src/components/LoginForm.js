import React, { Component } from 'react'
import firebase from 'firebase'
// import { View, TextInput } from 'react-native'
import { Button, Card, CardItem, Input } from './common'


class LoginForm extends Component {
  constructor (props) {
    super(props)
    state = { email: "", password: "" }
  }

  onButtonPress(){
    const {email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
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
          <CardItem>
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
          </CardItem>
        </Card>
    )
  }
}

export default LoginForm
