import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { artistFetch } from '../actions'

class ArtistList extends Component {
  componentWillMount() {
    this.props.artistFetch()
  }
  render () {
    return (
      <View>
        <Text> Artist1 </Text>
        <Text> Artist2 </Text>
        <Text> Artist3 </Text>
      </View>
    )
  }
}

export default connect(null, { artistFetch })(ArtistList)
