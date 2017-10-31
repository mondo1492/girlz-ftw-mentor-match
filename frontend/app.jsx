import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';
// import { login } from './actions/session_actions';
import { login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    delete window.currentUser;
    } else {
      store = configureStore();
    }

  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  //testing

  const root = document.getElementById('root');
  Modal.setAppElement(document.HashRouter);
  ReactDOM.render(<Root store={ store }/>, root);
});
