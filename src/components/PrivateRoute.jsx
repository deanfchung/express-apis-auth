import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { submitForm } from '../actions';
import { validateUser } from '../utils';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, username, password } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    useEffect(() => {
        validateUser(username, password).then((token) => {
            dispatch(submitForm(token))
        })
    }, [])

    return (<Route render={({ location }) =>
        isAuthenticated ? children
            : (<Redirect to={{
                pathname: "/",
                state: { from: location }
            }} />)} />)
}

export default PrivateRoute