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
        <Menu pointing secondary fixed='' color='blue' >
          <Menu.Item name='lessons' active={activeItem === 'lessons'} onClick={this.handleItemClick} as={NavLink} to='/lessons'/>
          <Menu.Item name='letters' active={activeItem === 'letters'} onClick={this.handleItemClick} as={NavLink} to='/letters'/>
          <Menu.Item name='cards' active={activeItem === 'cards'} onClick={this.handleItemClick} as={NavLink} to='/cards'/>
          <Menu.Menu position='right'>
            <StudentModal userDetails={this.props.user}>
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

function mapStateToProps(state) {
  return {
    user: state.user.user
  };
}

export default connect(mapStateToProps)(StudentMenu);
