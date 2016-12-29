import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDrRyImz3xgXafpvLS9_Y5DcirOphphXdM',
      authDomain: 'auth-93c4a.firebaseapp.com',
      databaseURL: 'https://auth-93c4a.firebaseio.com',
      storageBucket: 'auth-93c4a.appspot.com',
      messagingSenderId: '1013846754759'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={styles.buttonContainerStyle}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size='large' />
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}

const styles = {
  buttonContainerStyle: {
    flexDirection: 'row'
  }
}

export default App
