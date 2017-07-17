import React, { Component } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import Home from './home/home';
import StudentStart from './start/start_student';
import TeacherStart from './start/start_teacher';
import LettersList from './letters/letters_list';
import CardsList from './cards/cards_list'
import Lessons from './lessons/lessons';
import Translator from './translator/translator';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/lessons' component={Lessons} />
            <Route path='/read' component={LettersList} />
            <Route path='/start/student' component={StudentStart} />
            <Route path='/start/teacher' component={TeacherStart} />
            <Route path='/study' component={CardsList} />
            <Route path='/translator' component={Translator} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
