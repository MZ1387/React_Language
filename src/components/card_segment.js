import React from 'react'
import { Header, Input, Segment } from 'semantic-ui-react'

const CardSegment = (props) => (
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
)

export default CardSegment
