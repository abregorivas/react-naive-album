import React, { Component } from 'react'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component {

  componentWillMount () {
    console.log('cwm', this.props.lib);
    const dataSrc = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = dataSrc.cloneWithRows(this.props.lib)
  }

renderRow(library) {
  return <ListItem library={library}/>
}

  render () {
    console.log('props', this.props)
    return(
      // <ListView dataSource={this.dataSource} renderRow={this.renderRow}/>
      <Text>Test</Text>
    )

  }
}

const mapStateToProps = (state) => {
  return {lib: state.lib}
}
export default connect(mapStateToProps)(LibraryList)
