import React, { Component } from 'react';
import Slider from 'react-slick';
import { Button, Header, Segment, Image, Dimmer } from 'semantic-ui-react';

import './cards.css';

class CardSegment extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.handleHide = this.handleHide.bind(this)
  }

  next() { this.slider.slickNext() }
  previous() { this.slider.slickPrev() }

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  renderCards() {
    return this.props.vocab.map((vocab, index) => {
      const { term, definition, example } = vocab;

      const { active } = this.state
      const content = (
        <div>
          <Header as='h2' inverted>{definition}</Header>
        </div>
      )

      return (
        <div className='postcard-container'>
          <Dimmer.Dimmable
            className='postcard-img'
            as={Image}
            dimmed={active}
            dimmer={{ active, content }}
            // onMouseEnter={this.handleShow}
            onMouseLeave={this.handleHide}
            size='large'
            src='http://www.oneequalworld.com/wp-content/uploads/2017/02/shutterstock_201120113.jpg'
          />
          <div>
            <Header as='h1' className='postcard-text'>{term}</Header>
          </div>
        </div>
      )
    })
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className=''>
        <Segment basic textAlign='center'>
          <Slider ref={c => this.slider = c } {...settings}>
            {this.renderCards()}
          </Slider>
        </Segment>
        <div style={{textAlign: 'right'}}>
          <Button  icon='chevron left' color='red' onClick={this.previous}/>
          <Button  icon='chevron right' color='blue' onClick={this.next}/>
        </div>
      </div>
    );
  }
}

export default CardSegment;
