import React, { Component } from 'react';
import { Grid, Modal } from 'semantic-ui-react';
import LetterTable from './letter_table';
import LetterSegment from './letter_segment';

class LetterModal extends Component {
  render() {
    const { subject, vocab, original, translation } = this.props.letterDetails;

    return (
      <div>
        <Modal size={'fullscreen'} trigger={this.props.children} closeIcon='close'>
          <Modal.Header>{subject}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Grid fluid>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <LetterTable vocab={vocab}/>
                  </Grid.Column>
                  <Grid.Column width={13}>
                    <LetterSegment original={original} translation={translation} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            {/* <Button basic color='red' onClick={this.props.children.close}>
              Close
            </Button> */}
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}


export default LetterModal
