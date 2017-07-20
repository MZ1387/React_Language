import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

import StudentModal from './student_modal';

class StudentMenu extends Component {
  state = { activeItem: 'Letters' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className='student-menu'>
        <Menu pointing secondary fixed=''>
          <Menu.Item name='Lessons' active={activeItem === 'Lessons'} onClick={this.handleItemClick} as={NavLink} to='/lessons'/>
          <Menu.Item name='Letters' active={activeItem === 'Letters'} onClick={this.handleItemClick} as={NavLink} to='/letters'/>
          <Menu.Item name='Cards' active={activeItem === 'Cards'} onClick={this.handleItemClick} as={NavLink} to='/cards'/>
          <Menu.Item name='Translate' active={activeItem === 'Translate'} onClick={this.handleItemClick} as={NavLink} to='/translator'/>
          <Menu.Menu position='right'>
            <StudentModal>
              <Menu.Item name='profile' />
            </StudentModal>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

        <Segment basic>
          {this.props.children}
        </Segment>
      </div>
    )
  }
}

export default StudentMenu;
