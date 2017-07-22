import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Modal, Embed } from 'semantic-ui-react';

import LetterTable from './letter_table';
import LetterSegment from './letter_segment';
import './letters.css';

class LetterModal extends Component {
  render() {
    const { title, message, link, vocab } = this.props.letterDetails;
    return (
      <div >
        <Modal size={'large'} trigger={this.props.children} closeIcon='close' className='letter-modal'>
          <Modal.Header className='letter-modal-header'>{title}</Modal.Header>
          <Modal.Content className='letter-modal-content'>
            <Modal.Description>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <LetterSegment
                      original={message}
                      translation={this.props.translated}
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
          <Modal.Actions className='letter-modal-actions'>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    translated: state.translator.translated,
  }
}

export default connect(mapStateToProps)(LetterModal);
