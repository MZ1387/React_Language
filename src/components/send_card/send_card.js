import React, { Component } from 'react'
import { Button, Container, Form, Segment, Select, TextArea } from 'semantic-ui-react'

class SendCard extends Component {
  render() {
    const panels = [
      {
        key: 'nature',
        value: 'nature',
        text: 'nature'
      },
      {
        key: 'animals',
        value: 'animals',
        text: 'animals'
      },
      {
        key: 'school',
        value: 'school',
        text: 'school'
      }
    ]

    return (
      <div>
        <Container>
          <Segment basic>
            <Form>
              <Form.Field>
                <TextArea rows={2} placeholder='Enter vocabulary words to study' />
              </Form.Field>
              <Form.Field>
                <Select placeholder='Category' options={panels} />
              </Form.Field>
              <Button floated='right' inverted color='red'>Submit</Button>
            </Form>
          </Segment>
        </Container>
      </div>
    );
  }
}


export default SendCard
