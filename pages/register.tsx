import { Container } from 'components/Container';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import { appRoutes } from '../utils/routes';

const RegisterForm = dynamic(() => import('components/forms/RegisterForm').then((module) => module.RegisterForm));
const RegisterProfile = dynamic(() =>
  import('components/forms/RegisterProfile').then((module) => module.RegisterProfile)
);
const RegisterSuccess = dynamic(() =>
  import('components/forms/RegisterSuccess').then((module) => module.RegisterSuccess)
);

const STEPS = [
  {
    Component: RegisterForm,
  },
  {
    Component: RegisterProfile,
  },
  {
    Component: RegisterSuccess,
  },
];

const Register = () => {
  const [step, setStep] = useState<number>(0);
  const router = useRouter();
  const ActiveRegisterComponent = useMemo(() => STEPS[step].Component, [step]);

  const handleStep = useCallback(() => {
    step === STEPS.length - 1 ? router.push(appRoutes.HOME) : setStep((state) => state + 1);
  }, [router, step]);

  return (
    <Container centerContent>
      <ActiveRegisterComponent onHandleStep={handleStep} />
    </Container>
  );
};

export default Register;
