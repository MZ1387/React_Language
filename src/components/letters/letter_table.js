import React from 'react'
import { Table } from 'semantic-ui-react'

function renderVocab(word) {
  const { original, translation } = word;

  return (
    <Table.Row key={original}>
      <Table.Cell>{original}</Table.Cell>
      <Table.Cell>{translation}</Table.Cell>
    </Table.Row>
  )
}

export default (props) => {
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='2'>Vocab</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell colSpan='1'>Original</Table.HeaderCell>
            <Table.HeaderCell colSpan='1'>Translation</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.vocab.map(renderVocab)}
        </Table.Body>
       </Table>
    </div>
  );
}
