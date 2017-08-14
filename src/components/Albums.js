import React, { Component } from 'react'
import {View } from 'react-native'

import {Header} from './common'
import AlbumList from './AlbumList'

class Albums extends Component {
  render() {
    return (
      <View style={ {flex: 1} }>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
          );
        }
      }

      export default Albums
