import React, { Component } from 'react';
import { Button, Grid, Modal, Image, Header, Dropdown } from 'semantic-ui-react';

class StudentModal extends Component {

  render() {
    const { uid, displayName, email, photoURL } = this.props.userDetails;
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
                  <Image src={photoURL} size='small' />
                </Grid.Column>
                <Grid.Column width={13}>
                  <Header as='h3'>Name:</Header>
                  <p>{displayName}</p>
                  <Header as='h3'>Email:</Header>
                  <p>{email}</p>
                  {/* <Header as='h2'>Language</Header>
                  <Dropdown placeholder='Translate To...' fluid selection options={languages} /> */}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            {/* <Button positive content='Save' /> */}
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default StudentModal;
