import _ from 'lodash'
import React, { Component } from 'react'
import { View, Text, ScrollView, ListView } from 'react-native'
import { connect } from 'react-redux'
import { artistFetch } from '../actions'


//note: createDataSource is added to both compWillMount & compWillRecvProps
// this will allow for the data to be obtained if user goes directly to
//  artist list or to create artist and then to artist list

class ArtistList extends Component {

  componentWillMount() {
    this.props.artistFetch()
    this.createDataSource(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.createDataSource(nextProps)
  }


//using lodash to convert object to and array of artists because
// dataSrc.cloneWithRows method does not work with objects it only works
// with an array of object
  createDataSource({ artists }) {
    const dataSrc = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = dataSrc.cloneWithRows(artists)
  }

  render () {
    console.log('Artists', this.props)
    return (
      <View>
        <Text> Artist1 </Text>
        <Text> Artist2 </Text>
        <Text> Artist3 </Text>
      </View>
    )
  }
}


const mapStateToProps = state => {
  const artists = _.map(state.artists, (val, uid) => {
    return { ...val, uid }
  })
  return { artists }
}

export default connect(mapStateToProps, { artistFetch })(ArtistList)
