import React, { Component } from 'react'
import firebase from 'firebase'
import { View, Text } from 'react-native'
import { Button, Card, CardItem, Input, Spinner } from './common'
import { emailChanged, passwordChanged } from '../actions'
import { connect } from 'react-redux'

class LoginForm extends Component {

  state = { email: "", password: "", error: "", loading: false}
  //the onButtonPress will attempt to authenticate the user, if that does not work then it will try to
  // create a new user otherwise it will display an error
  onButtonPress(){
    const {email, password } = this.state
    this.setState({error: '', loading: true})
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch( () => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this))
    })
  }

  onLoginSuccess(){
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed!',
      loading: false
    })
  }

  renderButton (){
    if(this.state.loading) {
      return <Spinner size={'small'}/>
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    )
  }

onEmailChange (text)  {
  this.props.emailChanged(text)
}

onPasswordUpdate (text) {
  this.props.passwordChanged(text)
}

  render () {
    return (
        <Card>
          <CardItem>
            <Input
              placeholder='user@gmail.com'
              label={'Email'}
              value={this.props.email}
              onChangeText={this.onEmailChange.bind(this)}
              />
          </CardItem>

          <CardItem>
            <Input
              secureTextEntry
              placeholder='password'
              label={"Password"}
              value={this.props.password}
              onChangeText={this.onPasswordUpdate.bind(this)}
            />
          </CardItem>

          <Text style={styles.errorTextStyle}>{this.state.error}</Text>

          <CardItem>
            {this.renderButton()}
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

mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm)
