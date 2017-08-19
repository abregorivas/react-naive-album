import React, { Component } from 'react'
import firebase from 'firebase'
import { View, Text } from 'react-native'
import { Button, Card, CardItem, Input, Spinner } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { connect } from 'react-redux'

class LoginForm extends Component {

  // state = { email: "", password: "", error: "", loading: false}
  //the onButtonPress will attempt to authenticate the user, if that does not work then it will try to
  // create a new user otherwise it will display an error
  onButtonPress(){
    // const {email, password } = this.state
    // this.setState({error: '', loading: true})
    // firebase.auth().signInWithEmailAndPassword(email, password)
    // .then(this.onLoginSuccess.bind(this))
    // .catch( () => {
    //   firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then(this.onLoginSuccess.bind(this))
    //   .catch(this.onLoginFail.bind(this))
    // })
    const {email, password } = this.props
    this.props.loginUser({email, password})
  }

  // onLoginSuccess(){
  //   this.setState({
  //     email: '',
  //     password: '',
  //     error: '',
  //     loading: false
  //   })
  // }

  // onLoginFail() {
  //   this.setState({
  //     error: 'Authentication Failed!',
  //     loading: false
  //   })
  // }

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
    console.log('props', this.props)
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

          <Text style={styles.errorTextStyle}>{this.props.error}</Text>

          <CardItem>
            {/* {this.renderButton()} */}
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

// mapStateToProps = ({ auth }) => {
//   const { email, password, error } = auth;
//   return { email, password, error }
// }

mapStateToProps = ( state ) => {
  const { email, password, error } = state.auth;
  return { email, password, error }
}

export default connect(mapStateToProps,
  {emailChanged, passwordChanged, loginUser})(LoginForm)
