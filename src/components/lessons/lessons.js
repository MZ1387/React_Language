import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, getLessons } from '../../store/actions/action_lessons';
import { Grid, Table, Container, Segment, Button, Menu, Icon, Header } from 'semantic-ui-react';
import LessonModal from './lesson_modal';

class Lessons extends Component {
  componentDidMount() {
    this.props.dispatch(getLessons());
    this.props.dispatch(getCategories());
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  renderLessons = (lesson) => {
    const { title, description } = lesson;

    return (
      <Table.Row key={title}>
        <Table.Cell>{title}</Table.Cell>
        <Table.Cell>{description}</Table.Cell>
        <Table.Cell>
          <LessonModal lessonDetails={lesson} categories={this.props.categories}>
            <Button content='Edit' floated='right'/>
          </LessonModal>
        </Table.Cell>
      </Table.Row>
    );
  }

  render() {
    return (
      <div>
        <Container>
          <Segment>
            <Grid>
              <Grid.Column width={8}>
                <Header as='h2'>Lessons</Header>
              </Grid.Column>
              <Grid.Column width={8}>
                <LessonModal lessonDetails={''} categories={this.props.categories}>
                  <Button content='Add Lesson' floated='right' size='small' />
                </LessonModal>
              </Grid.Column>
            </Grid>
            <Table fixed striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Title</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.props.lessons.map(this.renderLessons, this)}
              </Table.Body>

              <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='left chevron' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='right chevron' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
              </Table.Footer>
            </Table>
          </Segment>
        </Container>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lessons: state.lessons.lessons,
    categories: state.lessons.categories
  }
}

export default connect(mapStateToProps)(Lessons);
