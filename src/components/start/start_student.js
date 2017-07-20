import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Embed, Segment, Header, Image, Button, Container } from 'semantic-ui-react';

class StudentStart extends Component {
  render() {
    return (
      <div className='student-start'>
        <Container>
        <Segment basic>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Embed
                  id='0XpBiZv0RWY'
                  placeholder='http://www.oneequalworld.com/wp-content/uploads/2017/02/shutterstock_201120113.jpg'
                  source='youtube'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button basic content='Get Started' color='blue' fluid as={NavLink} to='/letters' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        </Container>
      </div>
    );
  }
}

export default StudentStart;
