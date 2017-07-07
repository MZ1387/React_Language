import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import LettersList from './components/letters_list';
import CardsList from './components/cards_list'
import SendLetter from './components/send_letter'
import SendCard from './components/send_card'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
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
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
