import React from 'react';
import NavBar from './NavBar'
import { Route, Switch } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <Switch>
                <Route exact path='/'><p>Stocks</p></Route>
                <Route exact path='/stocks'><p>stocks</p></Route>
                <Route exact path='/crypto'><p>Crypto</p></Route>
                <Route exact path='/visualization'><p>Visualization</p></Route>
            </Switch>
        </>
    )
}