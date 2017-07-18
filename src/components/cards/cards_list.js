import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Container, Image, Segment } from 'semantic-ui-react';

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
        <Card key={index}>
        <Card.Content>
          <Image floated='right' size='mini' src='https://react.semantic-ui.com/assets/images/avatar/small/stevie.jpg' />
          <Card.Header>
            Category: {category}
          </Card.Header>
          <Card.Meta>
          </Card.Meta>
          <Card.Description>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <CardModal
            category={category}
            categoryVocab={categoryVocab}
          >
            <Button basic fluid color='red' onClick={this.show}>Open</Button>
          </CardModal>
        </Card.Content>
      </Card>
      );
    })
  }

  render() {
    // console.log(this.props.vocab);
    // const nouns = _.filter(this.props.vocab, ['category', 'noun']);
    // console.log(nouns);
    return(
      <div>
        <Container>
          <Segment basic>
            <Card.Group itemsPerRow={6}>
              {this.renderCards()}
            </Card.Group>
          </Segment>
        </Container>
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
