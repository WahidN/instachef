import Link from 'next/link';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../providers/AuthProvider';
import { appRoutes } from '../../utils/routes';
import { Button } from '../Button';
import { Container } from '../Container';
import { Form } from '../Form';
import { Input } from '../Input';
import Logo from '../Logo';
import { VerticalMargin } from '../VerticalMargin';

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { signInWithGoogle, login, authErrors } = useAuth();

  const loginWithGoogle = useCallback(async () => {
    await signInWithGoogle();
  }, [signInWithGoogle]);

  const loginNormal = useCallback(
    (data: Inputs) => {
      login(data.email, data.password);
    },
    [login]
  );

  const { register, handleSubmit } = useForm();

  return (
    <Container>
      <div className="center">
        <Logo />
      </div>
      <h1 className="textCenter">Log in</h1>
      <Form buttonLabel="Log in" onSubmit={handleSubmit(loginNormal)} fieldErrors={authErrors}>
        <Input type="email" label="E-mail" required {...register('email')} />
        <Input type="password" label="Password" required {...register('password')} />
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
      <Button icon="google" onClick={loginWithGoogle} secondary>
        Google
      </Button>
    </Container>
  );
};
