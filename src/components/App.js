import React, { Component } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import LettersList from './letters/letters_list';
import CardsList from './cards/cards_list'
import SendLetter from './send_letter/send_letter'
import SendCard from './send_card/send_card'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/read' component={LettersList} />
            <Route path='/send/card' component={SendCard} />
            <Route path='/send/letter' component={SendLetter} />
            <Route path='/study' component={CardsList} />
            <Route path='/' component={App} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
