import React, { Component } from 'react'
import {  View } from 'react-native'
import { Card, CardItem, Button } from './common'
import { connect } from 'react-redux'
import { artistUpdate, artistCreate } from '../actions'
import ArtistForm from './ArtistForm'

class ArtistCreate extends Component {

  OnButtonPress() {
    const {name, phone, genre } = this.props
    this.props.artistCreate({name, phone, genre: genre || 'Rock' })
  }

  render () {
    console.log('Artistprops', this.props.artist)
    return (
      <Card>
        <ArtistForm {...this.props}/>
        <CardItem>
          <Button onPress={this.OnButtonPress.bind(this)}>Save</Button>
        </CardItem>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, genre } = state.artistForm
  return {name, phone, genre }
}

export default connect(mapStateToProps, {artistUpdate, artistCreate})(ArtistCreate)
