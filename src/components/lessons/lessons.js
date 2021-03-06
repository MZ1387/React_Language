import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Table, Container, Segment, Button, Menu, Icon, Header } from 'semantic-ui-react';

import { lessonsRef, categoriesRef } from '../../firebase';
import { getLessons } from '../../store/actions/action_lessons';
import LessonModalAdd from './lesson_modal_add';
import LessonModalUpdate from './lesson_modal_update';

class Lessons extends Component {
  componentDidMount() {
    lessonsRef.on('value', snap => {
      let lessons = [];
      snap.forEach(lesson => {
        const { title, description, message, link, vocab } = lesson.val();
        const serverKey = lesson.key;
        lessons.push({ serverKey, title, description, message, link, vocab });
      });
      this.props.dispatch(getLessons(lessons));
    })

    // categoriesRef.on('value', snap => {
    //   let categories = [snap.val()];
    //
    //   snap.forEach(category => {
    //     // const { title, description, message, link, vocab } = lesson.val();
    //     // const serverKey = lesson.key;
    //     categories.push(category);
    //   });
    //   console.log(categories);
    //   // this.props.dispatch(getCategories(categories));
    // })
  }

  renderLessons = () => {
    return this.props.lessons.map((lesson) => {
      const { title, description, serverKey } = lesson;

      return (
        <Table.Row key={serverKey}>
          <Table.Cell>{title}</Table.Cell>
          <Table.Cell>
            {description}
          </Table.Cell>
          <Table.Cell>
            <LessonModalUpdate lessonDetails={lesson}
              // categories={this.props.categories}
            >
              <Button content='Edit' floated='right'/>
            </LessonModalUpdate>
          </Table.Cell>
        </Table.Row>
      );
    })
  }

  render() {
    return (
      <div className='lessons'>
        {/* <Container> */}
          <Segment basic>
            <Grid>
              <Grid.Column width={8}>
                <Header as='h1'>Lessons</Header>
              </Grid.Column>
              <Grid.Column width={8}>
                <LessonModalAdd
                  // categories={this.props.categories}
                >
                  <Button content='Add Lesson' floated='right' size='small' />
                </LessonModalAdd>
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
                {this.renderLessons()}
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
        {/* </Container> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lessons: state.lessons.lessons
    // categories: state.lessons.categories
  }
}

export default connect(mapStateToProps)(Lessons);
