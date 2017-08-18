import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { CardItem } from './common'
import { connect } from 'react-redux'
import * as actions from '../actions'

class ListItem extends Component {

    renderDescription(){
      const {library, techSelectionId} = this.props

      if(library.id === techSelectionId) {
        return (
          <Text>{library.description}</Text>
        )
      }
    }

  render () {
    const { titleStyle } = styles
    const {id, title } = this.props.library


    return (
      <TouchableWithoutFeedback onPress={()=> this.props.selectLibrary(id)}>
        <View>
          <CardItem>
            <Text style={titleStyle}>{title}</Text>
          </CardItem>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = (state) => {
  return {
    techSelectionId: state.techSelectionId
  }
}
export default connect(mapStateToProps, actions)(ListItem)
//note:
// first argument in connect is for mapStateToProps
// second argument is to bind action creators  to the component.
// passing in actions which will become props in component
