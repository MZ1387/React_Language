import React, { Component } from 'react';
import { Button, Icon, Modal, Segment, Header } from 'semantic-ui-react';

class LoginModal extends Component {
  render() {
    return (
      <div>
        <Modal size={'small'} trigger={this.props.children} closeIcon='close' basic>
          <Modal.Header></Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Segment padded basic>
                <Header as='h1' inverted>Login</Header>
                <Button color='facebook' size='large' fluid>
                  <Icon name='facebook' /> Facebook
                </Button>
                <br />
                <Button color='google plus' size='large' fluid>
                  <Icon name='google plus' /> Google Plus
                </Button>
              </Segment>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default LoginModal
