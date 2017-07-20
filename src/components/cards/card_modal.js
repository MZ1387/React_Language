import React, { Component } from 'react';
import { Accordion, Grid, Modal, Statistic } from 'semantic-ui-react';
import CardTable from './card_table';
import CardSegment from './card_segment';

class CardModal extends Component {
  render() {
    const { category, categoryVocab } = this.props;
    const panels = [
      {
        title: 'Vocabulary',
        content: (
          <CardTable vocab={categoryVocab}/>
        )
      }
    ];

    return (
      <div className='card-modal'>
        <Modal size={'small'} trigger={this.props.children} closeIcon='close'>
          <Modal.Header>
            {(category === 'slang') ? (category.toUpperCase()) : (`${category.toUpperCase()}S`)}
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <CardSegment vocab={categoryVocab}/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Accordion panels={panels} fluid />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Statistic
              size='mini'
              label={(categoryVocab.length < 2) ? ('card') : ('cards')}
              value={categoryVocab.length}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}


export default CardModal;
