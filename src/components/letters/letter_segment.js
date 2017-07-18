import React, { Component } from 'react'
import { Accordion, Form, TextArea } from 'semantic-ui-react'

class LetterSegment extends Component {
  render() {
    const { original, translation } = this.props;
    const panels = [
      {
        title: 'Original Message',
        content: (
          <Form>
            <TextArea autoHeight rows={20} placeholder='' value={original} />
          </Form>
        ),
        active: 'open'
      },
      {
        title: 'Translated Message',
        content: (
          <Form>
            <TextArea autoHeight rows={20} placeholder='' value={original} />
          </Form>
        )
      }
    ];

    return (
      <div>
        <Accordion panels={panels} exclusive={false} fluid/>
      </div>
    );
  }
}


export default LetterSegment
