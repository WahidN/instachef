import Link from 'next/link';
import React, { useCallback } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { appRoutes } from '../../utils/routes';
import { Button } from '../Button';
import { Container } from '../Container';
import { Form } from '../Form';
import { Input } from '../Input';
import Logo from '../Logo';
import { VerticalMargin } from '../VerticalMargin';

export const LoginForm = () => {
  const { signInWithGoogle } = useAuth();

  const loginWithGoogle = useCallback(async () => {
    await signInWithGoogle();
  }, [signInWithGoogle]);

  return (
    <Container>
      <div className="center">
        <Logo />
      </div>
      <h1 className="textCenter">Log in</h1>
      <Form buttonLabel="Log in">
        <Input type="email" label="E-mail" required></Input>
        <Input type="password" label="Password" required></Input>
        <VerticalMargin size="small">
          <Link href={appRoutes.REGISTER_PAGE}>
            <a className="textSmall textCenter">Forgot your password?</a>
          </Link>
        </VerticalMargin>
      </Form>
      <Link href={appRoutes.REGISTER_PAGE}>
        <a className="textSmall textCenter">Create an account</a>
      </Link>

      <p className="textSmall">Or continue with:</p>
      <Button onClick={loginWithGoogle} secondary>
        Google
      </Button>
    </Container>
  );
};
