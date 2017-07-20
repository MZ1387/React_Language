import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Grid, Embed, Segment, Header, Image, Button } from 'semantic-ui-react';

class TeacherStart extends Component {
  render() {
    return (
      <div className='teacher-start'>
        <Container>
        <Segment basic>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Embed
                  id='1FtWWi7w1XU'
                  placeholder='http://www.oneequalworld.com/wp-content/uploads/2017/02/shutterstock_201120113.jpg'
                  source='youtube'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button basic content='Get Started' color='blue' fluid as={NavLink} to='/lessons' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        </Container>
      </div>
    );
  }
}

export default TeacherStart;
