import _ from 'lodash'
import React, { Component } from 'react'
import { Card, CardItem, Button } from './common'
import ArtistForm from './ArtistForm'
import { connect } from 'react-redux'
import { artistUpdate, artistSave } from '../actions'

class ArtistEdit extends Component {

  //note: CWM iterate through the artist and pass it to the reducer
  componentWillMount () {
    _.each(this.props.artist, (value, prop) => {
      this.props.artistUpdate({ prop, value })
    })
  }


  onButtonPress(){
    //note these are comming from the formReducer
    const { name, phone, genre } = this.props
    console.log(name, phone, genre )
    this.props.artistSave({ name, phone, genre, uid: this.props.artist.uid})
  }

  render () {
    return (
      <Card>
        <ArtistForm {...this.props}/>
        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
        </CardItem>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const {name, phone, genre } = state.artistForm
  return {name, phone, genre }
}

export default connect(mapStateToProps, { artistUpdate, artistSave })(ArtistEdit)
