import React, { useState } from 'react';
import variables from '../stylesheets/_variables.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginForm from './LoginForm'


const App = () => {
  const [auth, setAuth] = useState(false)
  return (
    <section>
      <LoginForm />
    </section>
  )
}

export default App;

