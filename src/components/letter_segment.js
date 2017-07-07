import React, { Component } from 'react'
import { Accordion } from 'semantic-ui-react'

class LetterSegment extends Component {
  render() {
    const { original, translation } = this.props;
    const panels = [
      {
        title: 'Original Message',
        content: original,
        active: 'open'
      },
      {
        title: 'Translated Message',
        content: translation
      }
    ]

    return (
      <div>
        <Accordion panels={panels} styled exclusive={false} fluid/>
      </div>
    );
  }
}


export default LetterSegment
