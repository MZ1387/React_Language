import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

class StudentMenu extends Component {
  state = { activeItem: 'Letters' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='Lessons' active={activeItem === 'Lessons'} onClick={this.handleItemClick} as={NavLink} to='/lessons'/>
          <Menu.Item name='Letters' active={activeItem === 'Letters'} onClick={this.handleItemClick} as={NavLink} to='/letters'/>
          <Menu.Item name='Cards' active={activeItem === 'Cards'} onClick={this.handleItemClick} as={NavLink} to='/cards'/>
          <Menu.Menu position='right'>
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
