import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Container, Image, Segment, Header, Icon } from 'semantic-ui-react';

import { lessonsRef, categoriesRef } from '../../firebase';
import { getCategories, getLessons } from '../../store/actions/action_lessons';
import { getCards } from '../../store/actions/action_cards';
import CardModal from './card_modal';

class CardsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    }
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

      let categories = [];

      snap.forEach(category => {
        categories.push(category.val());
      })

      this.setState({ categories })
      console.log(this.state.categories);
      // const categories = snap.val();
      // this.props.dispatch(getCategories(categories));
    })
  }

  renderCards() {
    return this.state.categories.map((category, index) => {
      const categoryVocab = _.filter(this.props.vocab, ['category', category]);
      console.log('categoryVocab', categoryVocab);

      return (
        <Card
          raised
          key={index}
          image='http://www.oneequalworld.com/wp-content/uploads/2017/02/shutterstock_201120113.jpg'
          description={
            <CardModal
              category={category}
              categoryVocab={categoryVocab}
            >
              <Button basic color='red' fluid onClick={this.show}>
                {(category === 'slang') ? (category) : (`${category}s`)}
              </Button>
            </CardModal>
          }
        />
      );
    })
  }

  render() {
    return(
      <div className='cards-list'>
        {/* <Container> */}
          {/* <Segment basic textAlign='center'>
            <Header as='h2' icon >
              Study Cards
              <Header.Subheader>
                Study all the phrases and vocabulary you learned in the letters. Just click on the topic to test your knowledge.
              </Header.Subheader>
            </Header>
          </Segment> */}
          <Segment basic >
            <Card.Group itemsPerRow={4}>
              {this.renderCards()}
            </Card.Group>
          </Segment>
        {/* </Container> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    vocab: state.lessons.vocab,
    categories: state.lessons.categories
  };
}

export default connect(mapStateToProps)(CardsList);
