import React, { Component } from 'react'
import { Text } from 'react-native'
import { CardItem } from './common'
import { connect } from 'react-redux'
import * as actions from '../actions'

class ListItem extends Component {

  render () {
    const { titleStyle } = styles
    console.log(this.props)
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

export default connect(null, actions)(ListItem)
//note:
// first argument in connect is for mapStateToProps
// second argument is to bind action creators  to the component.
// passing in actions which will become props in component
