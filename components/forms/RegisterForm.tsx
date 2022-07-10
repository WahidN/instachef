import React from 'react';
import { Form } from '../Form';
import { Input } from '../Input';

export const RegisterForm = () => (
  <>
    <h1 className="textCenter">Register</h1>
    <Form buttonLabel="Create an account">
      <Input type="email" label="E-mail" required></Input>
      <Input type="password" label="Password" required></Input>
      <Input type="password" label="Confirm password" required></Input>
    </Form>
  </>
);
