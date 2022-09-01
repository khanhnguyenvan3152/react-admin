import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { LoginForm } from '../../components/LoginForm/LoginForm'

export const Login = () => {
    return (
        <Container>
            <Container className='flex justify-center mb-4'>
                <Typography variant='h3'>Admin Dashboard</Typography>
            </Container>
            <Container className='flex justify-center'>
                <LoginForm />
            </Container>
        </Container>
    )
}
