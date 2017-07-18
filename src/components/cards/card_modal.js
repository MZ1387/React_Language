import React, { Component } from 'react';
import { Grid, Modal, Statistic } from 'semantic-ui-react';
import CardTable from './card_table';
import CardSegment from './card_segment';

class CardModal extends Component {
  render() {
    const { category, categoryVocab } = this.props;

    return (
      <div>
        <Modal size={'fullscreen'} trigger={this.props.children} closeIcon='close'>
          <Modal.Header>
            {(category === 'slang') ? (category.toUpperCase()) : (`${category.toUpperCase()}S`)}
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <CardSegment />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <CardTable vocab={categoryVocab}/>
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


export default CardModal
