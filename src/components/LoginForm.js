import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Card, CardItem } from './common'

class LoginForm extends Component {
  render () {
    return (
        <Card>
          <CardItem/>

          <CardItem/>

          <CardItem>
            <Button>Login</Button>
          </CardItem>
        </Card>
    )
  }
}

export default LoginForm
