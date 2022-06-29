import type { NextPage } from 'next'
import { Container } from '../components/Container'
import { Form } from '../components/Form';
import { Input } from '../components/Input'

const Home: NextPage = () => {
  return (
    <Container>
      <Form buttonLabel='Log in'>
        <Input type="email" label="E-mail" required></Input>
        <Input type="password" label="Password" required></Input>
      </Form>
    </Container>
  );
}

export default Home
