import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import { appRoutes } from '../../utils/routes';
import { Button } from '../Button';
import { Form } from '../Form';
import { Input } from '../Input';
import Logo from '../Logo';
import { VerticalMargin } from '../VerticalMargin';

export const LoginForm = () => {
  const { user, signInWithGoogle } = useAuth();
  const router = useRouter();

  const loginWithGoogle = useCallback(async () => {
    await signInWithGoogle();
    console.log(user);
    if (user) {
      router.push('/');
    }
  }, [user, signInWithGoogle, router]);

  return (
    <>
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
    </>
  );
};
