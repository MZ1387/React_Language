import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

class LetterTable extends Component {
  renderVocab() {
    return this.props.vocab.map((word, index) => {
      const { term, definition, example, category } = word;

      return (
        <Table.Row key={index}>
          <Table.Cell>{term}</Table.Cell>
          <Table.Cell>{definition}</Table.Cell>
        </Table.Row>
      );
    })
  }

  render() {
    return (
      <div className='letter-table'>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='2'>Vocab</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell colSpan='1'>Word/Phrase/</Table.HeaderCell>
              <Table.HeaderCell colSpan='1'>Definition</Table.HeaderCell>
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

export default LetterTable;
