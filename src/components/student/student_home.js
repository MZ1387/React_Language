import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Table, Container, Segment, Button, Menu, Icon, Header } from 'semantic-ui-react';

class StudentHome extends Component {
  render() {
    return (
      <div>Student Home</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lessons: state.lessons.lessons
    // categories: state.lessons.categories
  }
}

export default connect(mapStateToProps)(StudentHome);
