import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //testing

  const root = document.getElementById('root');
  Modal.setAppElement(document.HashRouter);
  ReactDOM.render(<Root store={ store }/>, root);
});
