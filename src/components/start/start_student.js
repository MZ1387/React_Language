import React, { Component } from 'react';
import { Grid, Embed, Segment, Header, Image, Button } from 'semantic-ui-react';

class StudentStart extends Component {
  render() {
    return (
      <div>
        <Segment basic>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Embed
                  id='0XpBiZv0RWY'
                  placeholder=''
                  source='youtube'
                />
              </Grid.Column>
              <Grid.Column>
                <Header as='h1'>Welcome to Pennie</Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <Button content='Get Started' fluid />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Image src={'https://react.semantic-ui.com/assets/images/wireframe/image.png'} size='medium'
                floated=''
                centered
                />
                <Header as='h1' textAlign='center'>Letters</Header>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
              </Grid.Column>
              <Grid.Column>
                <Image src={'https://react.semantic-ui.com/assets/images/wireframe/image.png'} size='medium'
                floated=''
                centered
                />
                <Header as='h1' textAlign='center'>Study Cards</Header>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default StudentStart;
