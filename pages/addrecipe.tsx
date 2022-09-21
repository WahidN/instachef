import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { Input } from 'components/Input';
import { Layout } from 'components/_Layout';
import { useCallback, useMemo, useState } from 'react';

const FirstStep = () => <Input type="text" label="" placeholder="Enter recipe name here" />;
const SecondStep = () => <h1>Second step</h1>;
const ThirdStep = () => <h1>Third step</h1>;

const STEPS = [
  {
    Component: FirstStep,
  },
  {
    Component: SecondStep,
  },
  {
    Component: ThirdStep,
  },
];

const AddPost = () => {
  const [step, setStep] = useState<number>(0);

  const handleNextStep = () => {
    setStep((state) => state + 1);
  };

  const handlePreviousStep = () => {
    setStep((state) => state - 1);
  };

  const renderNextButton = useCallback(
    () => <Button isSimple type="button" icon="arrowRight" onClick={handleNextStep} />,
    []
  );

  const renderPreviousButton = useCallback(
    () => <Button isSimple type="button" icon="arrowLeft" onClick={handlePreviousStep} />,
    []
  );

  const renderSubmitButton = useCallback(
    () => (
      <Button isSimple onClick={handleNextStep}>
        Post
      </Button>
    ),
    []
  );

  const renderRightButton = useMemo(
    () => (step === STEPS.length - 1 ? renderSubmitButton() : renderNextButton()),
    [renderNextButton, renderSubmitButton, step]
  );

  const renderLeftButton = useMemo(
    () => (step === 0 ? undefined : renderPreviousButton()),
    [renderPreviousButton, step]
  );

  const ActiveStepComponent = useMemo(() => STEPS[step].Component, [step]);

  return (
    <Layout
      headerOptions={{
        type: 'default',
        title: 'Add recipe',
        buttonRight: renderRightButton,
        buttonLeft: renderLeftButton,
      }}
    >
      <Container>
        <ActiveStepComponent />
      </Container>
    </Layout>
  );
};

export default AddPost;
