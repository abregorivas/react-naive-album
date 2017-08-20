import React, { Component } from 'react'
import { Card, CardItem, Input, Button } from './common'
import { connect } from 'react-redux'
import { artistUpdate } from '../actions'

class ArtistCreate extends Component {
  render () {
    console.log('Artistprops', this.props)
    return (
      <Card>
        <CardItem>
        <Input
        label="Name"
        placeholder="Artist Name"
        value={this.props.name}
        onChangeText={(value) => this.props.artistUpdate({prop: 'name', value })}
        />
        </CardItem>

        <CardItem>
        <Input
        label="Phone"
        placeholder="555-555-5555"
        value={this.props.phone}
        onChangeText={(value) => this.props.artistUpdate({prop: 'phone', value })}
        />
        </CardItem>

        <CardItem>
        <Input />
        </CardItem>

        <CardItem>
          <Button>Save</Button>
        </CardItem>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.artistForm
  return {name, phone, shift }
}

export default connect(mapStateToProps, {artistUpdate})(ArtistCreate)
