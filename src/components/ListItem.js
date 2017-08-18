import React, { Component } from 'react'
import { Text } from 'react-native'
import { CardItem } from './common'

class ListItem extends Component {

  render () {
    const { titleStyle } = styles
    return (
      <CardItem>
        <Text style={titleStyle}>{this.props.library.title}</Text>
      </CardItem>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

export default ListItem
