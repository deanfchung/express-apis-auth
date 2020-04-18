import React from 'react';
import variables from '../stylesheets/_variables.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginForm from './LoginForm'
import Layout from './Layout'
import Button from '@material-ui/core/Button'

const App = () => {
  return (
    <>
      {/* // <Router>
    //   <Switch>
    //     <Route path="/" exact>
    //       <LoginForm />
    //     </Route>
    //     <PrivateRoute path="/">
    //       <Layout />
    //     </PrivateRoute>
    //   </Switch>
    // </Router> */}
      <p><Button variant='contained'>Click Me!</Button></p>
      <Layout />
    </>
  )
}

export default App;

