import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import  ArtistList from './components/ArtistList'
import Albums from './components/Albums'
import ArtistCreate from './components/ArtistCreate'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key='login' component={LoginForm} title="Pease Login" initial />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.artistCreate()}
          rightTitle="Add"
          key='artistList'
          component={ArtistList}
          title="Artists"
          initial
          />
      </Scene>
      <Scene key="artistCreate" component={ArtistCreate} title="Add Artist" ></Scene>
    </Router>
  )
}

export default RouterComponent
