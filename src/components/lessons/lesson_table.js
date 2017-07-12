import React, { Component } from 'react';
import { Icon, Button, Divider, Grid, Segment, Form, Table } from 'semantic-ui-react';

class LessonTable extends Component {
  renderVocab = (vocab) => {
    const { term, definition, example, category } = vocab;

    return (
      <Table.Row>
        <Table.Cell>
          {term}
        </Table.Cell>
        <Table.Cell>
          {definition}
        </Table.Cell>
        <Table.Cell>
          {example}
        </Table.Cell>
        <Table.Cell>
          {category}
        </Table.Cell>
        <Table.Cell>
          <Button icon floated='right'>
            <Icon name='remove' />
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }

  render() {
    return (
      <div>
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
                {this.props.vocab.map(this.renderVocab, this)}
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
              <Form>
                <Form.TextArea label='Word/Phrase' placeholder='Write a word or phrase' />
                <Form.TextArea label='Definition' placeholder='Define vocabulary' />
                <Form.TextArea label='Example' placeholder='Write an example' />
                <Form.Select label='Category' upward options={this.props.categories} placeholder='Categories' />
                <Divider />
                <Form.Button fluid>Submit</Form.Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LessonTable;
