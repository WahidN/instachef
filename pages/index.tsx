import type { NextPage } from 'next'
import { Button } from '../components/Button';
import { Container } from '../components/Container'
import { Input } from '../components/Input'

const Home: NextPage = () => {
  return (
    <Container>
      <Input type="email" label="E-mail" required></Input>
      <Input type="password" label="Password" required></Input>
      <Button label='Log in'></Button>
    </Container>
  );
}

export default Home
