import React, { Component } from 'react'
import { Card, CardItem, Input, Button } from './common'

class ArtistCreate extends Component {
  render () {
    return (
      <Card>
        <CardItem>
        <Input
        label="Name"
        placeholder="Artist Name"
        />
        </CardItem>

        <CardItem>
        <Input
        label="Phone"
        placeholder="555-555-5555"
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

export default ArtistCreate
