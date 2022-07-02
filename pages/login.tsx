import { NextPage } from 'next';
import React from 'react'
import { Container } from '../components/Container';
import { LoginForm } from '../components/forms/LoginForm';

const Login: NextPage = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

export default Login;