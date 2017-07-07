import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Container, Image, Segment } from 'semantic-ui-react';
import { getCards } from '../../store/actions/action_cards';
import CardModal from './card_modal';

class CardsList extends Component {
  state = { open: false }

  componentDidMount() {
    this.props.dispatch(getCards());
  }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  renderCards = (card) => {
    const { category } = card;

    return (
      <Card key={category}>
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
          <CardModal cardDetails={card}>
            <Button basic fluid color='red' onClick={this.show}>Open</Button>
          </CardModal>
        </Card.Content>
      </Card>
    );
  }

  render() {
    return(
      <div>
        <Container>
          <Segment basic>
            <Card.Group itemsPerRow={6}>
              {this.props.cards.map(this.renderCards)}
            </Card.Group>
          </Segment>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cards: state.cards.all
  };
}

export default connect(mapStateToProps)(CardsList);
