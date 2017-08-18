import React, { Component } from 'react'
import { Text } from 'react-native'
import CardItem from './common'

class ListItem extends Component {
  render () {
    return (
      <CardItem>
        <Text>{'Test'}</Text>
      </CardItem>
    )
  }
}

export default ListItem
