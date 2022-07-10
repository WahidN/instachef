import Link from 'next/link';
import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuth } from '../../providers/AuthProvider';
import { Form } from '../Form';
import { Input } from '../Input';
import { VerticalMargin } from '../VerticalMargin';

interface Properties {
  onHandleStep: () => void;
}
interface IFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = ({ onHandleStep }: Properties) => {
  const { createUser, authErrors } = useAuth();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputs>();

  const createAccount: SubmitHandler<IFormInputs> = useCallback(
    async (data) => {
      try {
        const result = await createUser(data);
        if (result) {
          onHandleStep();
        }
      } catch (error) {
        console.log(error);
      }
    },
    [createUser, onHandleStep]
  );

  return (
    <>
      <h1 className="textCenter">Register</h1>
      <Form buttonLabel="Create an account" fieldErrors={authErrors} onSubmit={handleSubmit(createAccount)}>
        <Input
          type="email"
          label="E-mail"
          required
          error={errors.email?.message}
          {...register('email', { required: 'This field is required' })}
        ></Input>
        <Input
          type="password"
          label="Password"
          required
          error={errors.password?.message}
          {...register('password', { required: 'This field is required' })}
        ></Input>
        <Input
          type="password"
          label="Confirm password"
          required
          error={errors.confirmPassword?.message}
          {...register('confirmPassword', {
            required: 'This field is required',
            validate: (value) => value === getValues('password'),
          })}
        ></Input>
      </Form>
      <VerticalMargin size="big">
        <Link href="/">
          <a className="textSmall textCenter">Already have an account? Log in.</a>
        </Link>
      </VerticalMargin>
    </>
  );
};
