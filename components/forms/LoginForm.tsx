import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { Logo } from 'components/Logo';
import { VerticalMargin } from 'components/VerticalMargin';
import Link from 'next/link';
import { useAuth } from 'providers/AuthProvider';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { appRoutes } from 'utils/routes';

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { signInWithGoogle, login, authErrors, loading } = useAuth();
  const { register, handleSubmit } = useForm<Inputs>();

  const loginWithGoogle = useCallback(async () => {
    await signInWithGoogle();
  }, [signInWithGoogle]);

  const loginNormal: SubmitHandler<Inputs> = useCallback(
    async (data: Inputs) => {
      try {
        await login(data.email, data.password);
      } catch (error) {
        console.log(error);
      }
    },
    [login]
  );

  return (
    <Container>
      <div className="center">
        <Logo />
      </div>
      <h1 className="textCenter">Log in</h1>
      <Form buttonLabel="Log in" onSubmit={handleSubmit(loginNormal)} fieldErrors={authErrors} isLoading={loading}>
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
        <span>Google</span>
      </Button>
    </Container>
  );
};
