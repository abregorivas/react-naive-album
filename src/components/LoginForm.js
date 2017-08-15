import React, { Component } from 'react'
// import { View, TextInput } from 'react-native'
import { Button, Card, CardItem, Input } from './common'


class LoginForm extends Component {
  constructor (props) {
    super(props)
    state = { email: '' }
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
          <CardItem/>

          <CardItem>
            <Button>Login</Button>
          </CardItem>
        </Card>
    )
  }
}

export default LoginForm
