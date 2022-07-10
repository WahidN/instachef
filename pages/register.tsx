import React, { useMemo, useState } from 'react';
import { Container } from '../components/Container';
import { RegisterForm } from '../components/forms/RegisterForm';
import { RegisterProfile } from '../components/forms/RegisterProfile';

const Register = () => {
  const [step, setStep] = useState<number>(1);
  
  const component = useMemo(() => {
    switch (step) {
      case 1:
        return <RegisterForm onHandleStep={() => setStep(2)} />;
      case 2:
        return <RegisterProfile />;
      case 3:
        return <h1>Succes!</h1>;
      default:
        return null;
    }
  }, [step]);

  return <Container>{component}</Container>;
};

export default Register;
