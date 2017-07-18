import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Container, Image, Segment } from 'semantic-ui-react';

import { lessonsRef, categoriesRef } from '../../firebase';
import { getCategories, getLessons } from '../../store/actions/action_lessons';
import LetterModal from './letter_modal';

class LettersList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    lessonsRef.on('value', snap => {
      let lessons = [];
      snap.forEach(lesson => {
        const { title, description, message, link, vocab } = lesson.val();
        const serverKey = lesson.key;
        lessons.push({ serverKey, title, description, message, link, vocab });
      });
      this.props.dispatch(getLessons(lessons));
    });

    categoriesRef.on('value', snap => {
      const categories = snap.val();
      this.props.dispatch(getCategories(categories));
    })
  }

  renderLetters() {
    return this.props.lessons.map((lesson, index) => {
      const { title, description } = lesson;

      return (
        <Card key={index}>
          <Image src='http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Love-Letter-icon.png' />
          <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>HI</Card.Meta>
            <Card.Description>
              {(description.length > 25 ) ? (description.substring(0, 25) + '...') : (description)}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <LetterModal letterDetails={lesson}>
              <Button basic fluid color='red'>Open</Button>
            </LetterModal>
          </Card.Content>
        </Card>
      )
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Segment basic>
            <Card.Group itemsPerRow={6}>
              {this.renderLetters()}
            </Card.Group>
          </Segment>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lessons: state.lessons.lessons,
    vocab: state.lessons.vocab
  };
}

export default connect(mapStateToProps)(LettersList);
