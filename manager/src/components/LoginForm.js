import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'

import { Card, CardSection, Input, Button, Spinner } from './common'

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    const { email, password } = this.props

    this.props.loginUser({ email, password })
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.email}
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.props.password}
            secureTextEntry
            label='Password'
            placeholder='Password'
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth

  return { email, password, error, loading }
}

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm)
