import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

import reducers from './reducers';
import App from './components/App.jsx';
import './stylesheets/application.scss';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#root')
);

module.hot ? module.hot.accept() : null;
