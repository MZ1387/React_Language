import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Container, Image, Segment } from 'semantic-ui-react';
import { getLetters } from '../actions/action_letters';
import LetterModal from './letter_modal';

class LettersList extends Component {
  state = { open: false }

  componentDidMount() {
    this.props.dispatch(getLetters());
  }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  renderLetters = (letter) => {
    const { subject, teacher } = letter;

    return (
      <Card key={subject}>
        <Image src='http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Love-Letter-icon.png' />
        <Card.Content>
          <Card.Header>{subject}</Card.Header>
          <Card.Meta>{teacher}</Card.Meta>
          <Card.Description></Card.Description>
        </Card.Content>
        <Card.Content extra>
          <LetterModal letterDetails={letter} close={this.close}>
            <Button basic fluid color='red' onClick={this.show}>Open</Button>
          </LetterModal>
        </Card.Content>
      </Card>
    );
  }

  render() {
    return (
      <div>
        <Container>
          <Segment basic>
            <Card.Group itemsPerRow={6}>
              {this.props.letters.map(this.renderLetters, this)}
            </Card.Group>
          </Segment>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    letters: state.letters.all,
    selectedLetter: state.letters.selectedLetter
  };
}

export default connect(mapStateToProps)(LettersList);
