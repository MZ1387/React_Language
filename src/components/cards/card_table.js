import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class CardTable extends Component {
  renderVocab() {
    return this.props.vocab.map((vocab, index) => {
      const { term, definition, example } = vocab;

      return (
        <Table.Row key={index}>
          <Table.Cell>{term}</Table.Cell>
          <Table.Cell>{definition}</Table.Cell>
          <Table.Cell>{example}</Table.Cell>
        </Table.Row>
      )
    })
  }

  render() {
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Vocab</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell colSpan='1'>Word/Phrase</Table.HeaderCell>
              <Table.HeaderCell colSpan='1'>Definition</Table.HeaderCell>
              <Table.HeaderCell colSpan='1'>Example</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.renderVocab()}
          </Table.Body>
         </Table>
      </div>
    );
  }
}

export default CardTable;
