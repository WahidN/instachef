import { Button } from 'components/Button';

export const RegisterSuccess = ({ onHandleStep }: { onHandleStep: () => void }) => (
  <>
    <h1>Success!</h1>
    <Button onClick={onHandleStep}>start</Button>
  </>
);
