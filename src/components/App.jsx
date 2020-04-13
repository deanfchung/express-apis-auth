import React, { Fragment } from 'react';
import variables from '../stylesheets/_variables.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginForm from './LoginForm'


const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LoginForm />
          </Route>
          <PrivateRoute path="/">
            <p>Private Route</p>
          </PrivateRoute>
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App;

