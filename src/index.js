import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { firebaseApp } from './firebase';
import reducers from './store/reducers';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// firebaseApp.auth().onAuthStateChanged(user => {
//   if (user) {
//     console.log('USER LOGGED IN', user);
//
//   } else {
//     console.log('USER LOGGED OUT', user);
//   }
// })

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
