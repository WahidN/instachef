import { RegisterSuccess } from 'components/forms/RegisterSuccess';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { Container } from '../components/Container';
import { RegisterForm } from '../components/forms/RegisterForm';
import { RegisterProfile } from '../components/forms/RegisterProfile';

const Register = () => {
  const [step, setStep] = useState<number>(1);
  const router = useRouter();

  const component = useMemo(() => {
    switch (step) {
      case 1:
        return <RegisterForm onHandleStep={() => setStep(2)} />;
      case 2:
        return <RegisterProfile onHandleStep={() => setStep(3)} />;
      case 3:
        return <RegisterSuccess onHandleStep={() => router.push('/')} />;
      default:
        return null;
    }
  }, [router, step]);

  return <Container centerContent>{component}</Container>;
};

export default Register;
