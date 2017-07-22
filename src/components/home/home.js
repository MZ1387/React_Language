import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Checkbox, Form, Button, Container, Divider, Header, Segment } from 'semantic-ui-react';
import * as firebase from 'firebase';
import { firebaseApp, saveUser } from '../../firebase';
import { logUser } from '../../store/actions/action_user';
import LoginModal from './login_modal';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  googleSignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    var promise = firebase.auth().signInWithPopup(provider);
    //
    promise
    .then(result => {
      const { user } = result;
      saveUser(user);
    })
    .catch(error => {
      console.log(error);
    });
  }

  googleSignOut() {
    firebase.auth().signOut()
    .then(function() {
      this.props.dispatch(logUser({}));
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    const { open, size } = this.state

    return (
      <div className='home'>
        <Container fluid>
          <Header as='h2'>Pennie</Header>
          <Divider />
          <Segment textAlign='center' >
            <Button color='google plus' onClick={() => this.googleSignIn()} >
              <Icon name='google' /> Sign In with Google
            </Button>
            <Button color='google plus' onClick={() => this.googleSignOut()} >
              <Icon name='google' /> Sign Out
            </Button>
            {/* <LoginModal>
              <Button onClick={this.show('small')}>Login</Button>
            </LoginModal> */}
          </Segment>
        </Container>
      </div>
    )
  }
}

export default Home;
