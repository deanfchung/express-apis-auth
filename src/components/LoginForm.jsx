import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components'
import serverURL from '../apis';

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const userChange = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
    }
    const passChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)

    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await serverURL.post('/auth/login', { username, password })
        console.log('token: ', response.data.token)
    }
    return (
        <Div className='container'>
            <Form id='form' onSubmit={e => { handleLogin(e) }}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username" value={username} onChange={(e) => userChange(e)} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => passChange(e)} />
                </Form.Group>
                <Button variant="primary" type='submit'>
                    Login
                </Button>
                <Button className='secondary-button' variant='secondary'>
                    Register
                </Button>
            </Form>
        </Div>
    )
}

export default LoginForm

const Div = styled.div`
    width: 500px;
    margin-top: 100px;
    .secondary-button {
        margin-left: 10px;
    }
`