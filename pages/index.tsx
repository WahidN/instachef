import type { NextPage } from 'next'
import { Container } from '../components/Container'
import { LoginForm } from '../components/forms/LoginForm';

const Home: NextPage = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

export default Home
