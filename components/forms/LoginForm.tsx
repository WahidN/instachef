import React from 'react'
import { Form } from '../Form';
import { Input } from '../Input';

export const LoginForm = () => {
  return (
    <>
      <h1>Log in</h1>
      <Form buttonLabel="Log in">
        <Input type="email" label="E-mail" required></Input>
        <Input type="password" label="Password" required></Input>
      </Form>
    </>
  );
}
