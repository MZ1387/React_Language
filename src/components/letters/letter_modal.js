import React, { Component } from 'react';
import { Button, Grid, Modal, Embed } from 'semantic-ui-react';
import LetterTable from './letter_table';
import LetterSegment from './letter_segment';

class LetterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      translation: 'HI'
    }
  }

  render() {
    const { title, description, message, link, vocab, serverKey } = this.props.letterDetails;

    return (
      <div>
        <Modal size={'large'} trigger={this.props.children} closeIcon='close'>
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <LetterSegment
                      original={message}
                      translation={message}
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>
                    <LetterTable
                      vocab={vocab}
                    />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Embed
                      id={link}
                      placeholder='http://www.oneequalworld.com/wp-content/uploads/2017/02/shutterstock_201120113.jpg'
                      source='youtube'
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default LetterModal
