import type { NextPage } from 'next';
import { useMemo } from 'react';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { useAuth } from '../providers/AuthProvider';

const Home: NextPage = () => {
  const { user, logout } = useAuth();
  const userName = useMemo(() => user?.displayName, [user]);

  return (
    <Container>
      <h1>Hello {userName}</h1>
      <Button onClick={logout}>Log out</Button>
    </Container>
  );
};

export default Home;
