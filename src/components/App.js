import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch  } from 'react-router-dom';

import Home from './home/home';
import StudentStart from './start/start_student';
import TeacherStart from './start/start_teacher';
import StudentMenu from './student/student_menu';
import LettersList from './letters/letters_list';
import CardsList from './cards/cards_list'
import Lessons from './lessons/lessons';

class App extends Component {
  render() {
    return (
      <Router>
        <StudentMenu>
          <Switch>
            <Route path='/lessons' component={Lessons} />
            <Route path='/letters' component={LettersList} />
            <Route path='/start/student' component={StudentStart} />
            <Route path='/start/teacher' component={TeacherStart} />
            <Route path='/cards' component={CardsList} />
            <Route path='/' component={Home} />
          </Switch>
        </StudentMenu>
      </Router>
    );
  }
}

export default App;
