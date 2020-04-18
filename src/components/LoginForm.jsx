import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setUsername, setPassword } from '../actions';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    const { username, password } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername('')
        setPassword('')
        history.push('/todos')
    }

    return (
        <div>
            Login Form
        </div>
    )
}

export default LoginForm
