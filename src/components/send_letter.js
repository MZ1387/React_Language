import React from 'react'
import { Button, Container, Divider, Form, Segment, TextArea } from 'semantic-ui-react'

const SendLetter = () => (
  <Container>
    <Segment basic>
      <Form>
        <Form.Field>
          <TextArea autoHeight placeholder='Write a message' style={{ minHeight: 300 }} />
        </Form.Field>
        <Form.Field>
          <TextArea rows={2} placeholder='Enter vocabulary words to study' />
        </Form.Field>
        <Button floated='right' inverted color='red'>Submit</Button>
      </Form>
    </Segment>
  </Container>
)

export default SendLetter
