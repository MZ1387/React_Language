import React, { Component } from 'react';
import { Button, Grid, Modal, Image, Header, Dropdown } from 'semantic-ui-react';

class StudentModal extends Component {

  render() {
    const languages = [
      { key: 'Spanish', value: 'Spanish', text: 'Spanish' },
      { key: 'French', value: 'French', text: 'French' },
      { key: 'Italian', value: 'Italian', text: 'Italian' },
      { key: 'Portuguese', value: 'Portuguese', text: 'Portuguese' },
      { key: 'Polish', value: 'Polish', text: 'Polish' },
      { key: 'Turkish', value: 'Turkish', text: 'Turkish' },
      { key: 'Russian', value: 'Russian', text: 'Russian' }
    ];

    return (
      <div className='student-modal'>
        <Modal size={'tiny'} trigger={this.props.children} closeIcon='close'>
          <Modal.Header>
            Profile Settings
          </Modal.Header>
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Image src={'https://react.semantic-ui.com/assets/images/wireframe/image.png'} size='small' />
                </Grid.Column>
                <Grid.Column width={13}>
                  <Header as='h2'>Name</Header>
                  <p>USERNAME</p>
                  <Header as='h2'>Language</Header>
                  <Dropdown placeholder='Translate To...' fluid selection options={languages} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button positive content='Save' />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default StudentModal;
