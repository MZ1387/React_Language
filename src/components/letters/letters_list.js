import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Container, Image, Segment, Header } from 'semantic-ui-react';

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
        <Card
          raised
          key={index}
          header={title}
          image='http://www.oneequalworld.com/wp-content/uploads/2017/02/shutterstock_201120113.jpg'
          description={description}
          extra={
            <LetterModal letterDetails={lesson}>
              <Button basic fluid color='red' onClick={this.show}>Open</Button>
            </LetterModal>
          }
        />
      )
    });
  }

  render() {
    return (
      <div className='letters-list'>
        {/* <Container> */}
          {/* <Segment basic textAlign='center'>
            <Header as='h2' icon >
              Letters
              <Header.Subheader>
                Each letter is a lesson. Complete a lesson and get access to the next letter.
              </Header.Subheader>
            </Header>
          </Segment> */}
          <Segment basic>
            <Card.Group itemsPerRow={4}>
              {this.renderLetters()}
            </Card.Group>
          </Segment>
        {/* </Container> */}
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
