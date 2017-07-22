import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './store/reducers';
import registerServiceWorker from './registerServiceWorker';
import { firebaseApp } from './firebase';
import { logUser } from './store/actions/action_user';
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    const { uid, email, displayName, photoURL } = user;
    store.dispatch(logUser({ uid, email, displayName, photoURL }))
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
