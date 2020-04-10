import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './stylesheets/application.scss';

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

module.hot ? module.hot.accept() : null;
