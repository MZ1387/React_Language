import React, { Component } from 'react';
import { Icon, Button, Header, Input, Form, TextArea, Modal, Table, Grid, Segment, Divider } from 'semantic-ui-react';

import { lessonsRef } from '../../firebase';

class LessonModalUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.lessonDetails.title,
      description: this.props.lessonDetails.description,
      message: this.props.lessonDetails.message,
      link: this.props.lessonDetails.link,
      vocab: this.props.lessonDetails.vocab,
      term: '',
      definition: '',
      example: '',
      category: ''
    };
  }

  renderVocab = () => {
    return this.state.vocab.map((vocab, index) => {
      const { term, definition, example, category } = vocab;
      return (
        <Table.Row key={index}>
          <Table.Cell>{term}</Table.Cell>
          <Table.Cell>{definition}</Table.Cell>
          <Table.Cell>{example}</Table.Cell>
          <Table.Cell>{category}</Table.Cell>
          <Table.Cell>
            <Button icon floated='right' onClick={() => this.removeVocab(index)}>
              <Icon name='remove' />
            </Button>
          </Table.Cell>
        </Table.Row>
      );
    })
  }

  addVocab() {
    const { term, definition, example, category } = this.state;
    this.setState({ vocab: this.state.vocab.concat([{term, definition, example, category}]) })
    this.setState({ term: '', definition: '', example: '', category: '' })
  }

  removeVocab(index) {
    let newState = this.state.vocab.slice('');
    newState.splice(index, 1);

    this.setState({vocab: newState})
  }

  updateLesson(serverKey) {
    const { title, description, message, link, vocab } = this.state;
    lessonsRef.child(serverKey).update({ title, description, message, link, vocab });
  }

  removeLesson(serverKey) {
    lessonsRef.child(serverKey).remove();
  }

  render() {
    const { serverKey, title, description, message, link, vocab } = this.props.lessonDetails;
    // this.setState({ title, description, message, link, vocab });

    return (
      <div>
        <Modal size={'large'} trigger={this.props.children} closeIcon='close'>
          <Modal.Header>Update Lesson</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field control={Input} label='Title' placeholder='Title' onChange={event => this.setState({ title: event.target.value })} value={this.state.title} />
              <Form.Field control={TextArea} label='Description' placeholder='Description' onChange={event => this.setState({ description: event.target.value })} value={this.state.description} />
              <Form.Field control={TextArea} label='Message' placeholder='Write a message' onChange={event => this.setState({ message: event.target.value })} value={this.state.message} />
              <Form.Field control={Input} label='Video Link' placeholder='Video Link' onChange={event => this.setState({ link: event.target.value })} value={this.state.link} />
                <Grid>
                  <Grid.Column width={10}>
                    <Table fixed striped>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Word/Phrase</Table.HeaderCell>
                          <Table.HeaderCell>Definition</Table.HeaderCell>
                          <Table.HeaderCell>Example</Table.HeaderCell>
                          <Table.HeaderCell>Category</Table.HeaderCell>
                          <Table.HeaderCell textAlign='right'></Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {this.renderVocab()}
                      </Table.Body>
                    </Table>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Segment>
                      <Form>
                        <Form.TextArea label='Word/Phrase' placeholder='Write a word or phrase' onChange={event => this.setState({ term: event.target.value })} value={this.state.term} />
                        <Form.TextArea label='Definition' placeholder='Define vocabulary' onChange={event => this.setState({ definition: event.target.value })} value={this.state.definition} />
                        <Form.TextArea label='Example' placeholder='Write an example' onChange={event => this.setState({ example: event.target.value })} value={this.state.example} />
                        {/* <Form.Select label='Category' upward options={this.props.categories} placeholder='Categories' onChange={event => this.setState({ category: event.target.value })} /> */}
                        <Divider />
                        <Form.Button fluid onClick={() => this.addVocab()}>Submit</Form.Button>
                      </Form>
                    </Segment>
                  </Grid.Column>
                </Grid>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button content='Update'
              onClick={() => this.updateLesson(serverKey)}
              positive
            />
            <Button content='Remove'
              onClick={() => this.removeLesson(serverKey)}
              negative
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default LessonModalUpdate;
