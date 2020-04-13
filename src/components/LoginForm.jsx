import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
        <Div className='container'>
            <Form id='form' onSubmit={(e) => { handleSubmit(e) }}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter username" value={username} onChange={(e) => { dispatch(setUsername(e.target.value)) }} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
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