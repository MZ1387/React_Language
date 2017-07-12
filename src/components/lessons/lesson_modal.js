import React, { Component } from 'react';
import { Grid, Button, Header, Input, Form, TextArea, Modal } from 'semantic-ui-react';
import LessonTable from './lesson_table';

class LessonModal extends Component {
  render() {
    const { title, description, message, video, vocab } = this.props.lessonDetails;

    return (
      <div>
        <Modal size={'large'} trigger={this.props.children}>
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content>
            <Header as='h3'>Title</Header>
            <Input fluid placeholder='Title' defaultValue={title}/>
            <Header as='h3'>Description</Header>
            <Input fluid placeholder='Description' defaultValue={description}/>
            <Header as='h3'>Message</Header>
            <Form>
              <TextArea autoHeight placeholder='Write a message' rows={10} defaultValue={message}/>
            </Form>
            <Header as='h3'>Video Link</Header>
            <Input fluid placeholder='Video Link' defaultValue={video}/>
            <Header as='h3'>Vocabulary</Header>
            <LessonTable vocab={vocab} categories={this.props.categories}/>
          </Modal.Content>
          <Modal.Actions>
            <Button content='Update' positive />
            <Button content='Delete' negative />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}


export default LessonModal
