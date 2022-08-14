import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { Layout } from 'components/_Layout';
import type { NextPage } from 'next';
import { useAuth } from 'providers/AuthProvider';

const Home: NextPage = () => {
  const { user, logout } = useAuth();

  return (
    <Layout
      headerOptions={{
        showLogo: true,
      }}
    >
      <Container>
        <h1>Hello {user?.authUser?.displayName}</h1>
        <p>{user?.bio}</p>
        <Button onClick={logout}>Log out</Button>
      </Container>
    </Layout>
  );
};

export default Home;
