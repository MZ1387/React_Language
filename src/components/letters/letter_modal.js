import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Modal, Embed } from 'semantic-ui-react';
import { translate } from '../../store/actions/action_translator';

import LetterTable from './letter_table';
import LetterSegment from './letter_segment';
// import './letters.css';

class LetterModal extends Component {
  constructor(props) {
    super(props);

    const { message } = this.props.letterDetails;

    this.state = {
      original: message,
      from: 'en',
      to: 'es'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    var text = this.state.original;
    var from = this.state.from;
    var to = this.state.to;

    if (text && from && to) {
      this.props.dispatch(translate(text, from, to, this.props.dispatch));
      console.log(this.props);
    }
  }

  render() {
    const { title, link, vocab } = this.props.letterDetails;
    return (
      <div >
        <Modal size={'large'} trigger={this.props.children} closeIcon='close' className='letter-modal'>
          <Modal.Header>
            <Grid>
              <Grid.Column width={8}>
                {title}
              </Grid.Column>
              <Grid.Column width={8}>
                <Button content='Translate Lesson' floated='right' size='small' color='red' basic onClick={this.handleSubmit}/>
              </Grid.Column>
            </Grid>
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <LetterSegment
                      original={this.state.original}
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
          <Modal.Actions>
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
