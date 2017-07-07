import React, { Component } from 'react';
import { Grid, Modal, Statistic } from 'semantic-ui-react';
import CardTable from './card_table';
import CardSegment from './card_segment';

class CardModal extends Component {
  render() {
    const { category, vocab } = this.props.cardDetails;

    return (
      <div>
        <Modal size={'fullscreen'} trigger={this.props.children} closeIcon='close'>
          <Modal.Header>Category: {category}</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Grid fluid>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <CardTable vocab={vocab}/>
                  </Grid.Column>
                  <Grid.Column width={13}>
                    <CardSegment />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Statistic size='mini' label='cards' value={'5/10'} />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}


export default CardModal
