import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Icon, Table, Grid, Segment, Divider, Button, Input, Form, TextArea, Modal } from 'semantic-ui-react';

import { lessonsRef } from '../../firebase';

class LessonModalAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      message: '',
      link: '',
      vocab: [],
      term: '',
      definition: '',
      example: '',
      categories: []
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

  addLesson() {
    const { title, description, message, link, vocab } = this.state;
    lessonsRef.push({ title, description, message, link, vocab })
  }

  render() {
    return (
      <div>
        <Modal size={'large'} trigger={this.props.children} closeIcon='close'>
          <Modal.Header>Add Lesson</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field control={Input} label='Title' placeholder='Title' onChange={event => this.setState({ title: event.target.value })} />
              <Form.Field control={TextArea} label='Description' placeholder='Description' onChange={event => this.setState({ description: event.target.value })} />
              <Form.Field control={TextArea} label='Message' placeholder='Write a message' onChange={event => this.setState({ message: event.target.value })} />
              <Form.Field control={Input} label='Video Link' placeholder='Video Link' onChange={event => this.setState({ link: event.target.value })} />
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
                        {/* <Form.Select label='Category' upward options={this.props.categories} placeholder='Categories'
                          // onChange={event => this.setState({ categories: event.target.value })}
                        /> */}
                        <Divider />
                        <Form.Button fluid onClick={() => this.addVocab()}>Submit</Form.Button>
                      </Form>
                    </Segment>
                  </Grid.Column>
                </Grid>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button content='Save'
              onClick={() => this.addLesson()}
              positive
              fluid
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default LessonModalAdd;
