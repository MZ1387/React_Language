import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Icon, Table, Grid, Segment, Divider, Button, Input, Form, TextArea, Modal } from 'semantic-ui-react';

import { lessonsRef, categoriesRef, languagesRef } from '../../firebase';
import { getCategories } from '../../store/actions/action_lessons';

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
      category: '',
      categories: []
    };
  }

  componentDidMount() {
    categoriesRef.on('value', snap => {

      let stateOptions = [];

      snap.forEach(option => {
        stateOptions.push({key: option.val(), value: option.val(), text: option.val()});
      })

      this.setState({ categories: stateOptions})

      const categories = snap.val();
      this.props.dispatch(getCategories(categories));
    })
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
    const videoId = link.split('=').pop().split('&t').shift();

    lessonsRef.push({ title, description, message, link: videoId, vocab })
    // categoriesRef.transaction(data => {
    //   const categories = ['phrase','noun', 'verb', 'adjective', 'phrasal verb', 'idiom', 'slang', 'preposition'];
    //   return categories.sort();
    //     })

    // languagesRef.transaction(data => {
    //   const languages = ['Spanish', 'French', 'Italian', 'Portuguese', 'Polish', 'Russian', 'Turkish'];
      // [
      //   { key: 'Spanish', value: 'Spanish', text: 'Spanish' },
      //   { key: 'French', value: 'French', text: 'French' },
      //   { key: 'Italian', value: 'Italian', text: 'Italian' },
      //   { key: 'Portuguese', value: 'Portuguese', text: 'Portuguese' },
      //   { key: 'Polish', value: 'Polish', text: 'Polish' },
      //   { key: 'Turkish', value: 'Turkish', text: 'Turkish' },
      //   { key: 'Russian', value: 'Russian', text: 'Russian' }
      // ]
      // return languages.sort();
      //   })
  }

  render() {
    return (
      <div className='lesson-modal-add'>
        <Modal size={'large'} trigger={this.props.children} closeIcon='close'>
          <Modal.Header>Add Lesson</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field control={Input} label='Title' placeholder='Title' onChange={event => this.setState({ title: event.target.value })} />
              <Form.Field control={TextArea} label='Description' placeholder='Description' onChange={event => this.setState({ description: event.target.value })} />
              <Form.Field control={TextArea} autoHeight rows={20} label='Message' placeholder='Write a message' onChange={event => this.setState({ message: event.target.value })} />
              <Form.Field control={Input} label='YouTube Link' placeholder='YouTube Link' onChange={event => this.setState({ link: event.target.value })} />
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
                        <Form.Select label='Category'
                          upward
                          options={this.state.categories}
                          placeholder='Categories'
                          onChange={(event, { value }) => this.setState({ category: value })}
                        />
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
              positive
              onClick={() => this.addLesson()}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.lessons.categories
  };
}

export default connect(mapStateToProps)(LessonModalAdd);
