import React, { Component } from 'react'
import { Header, Input, Segment } from 'semantic-ui-react'

class CardSegment extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Header size='large' textAlign='center'>'This is a sentence example...'</Header>
        </Segment>
        <Input
          fluid
          action='Enter'
          placeholder='Input the missing word'
        />
      </div>
    );
  }
}

export default CardSegment
