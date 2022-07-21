import type { NextPage } from 'next';
import { useMemo } from 'react';
import { Button } from '../components/Button';
import { Layout } from '../components/_Layout';
import { useAuth } from '../providers/AuthProvider';

const Home: NextPage = () => {
  const { user, logout } = useAuth();
  const userName = useMemo(() => user?.displayName, [user]);

  return (
    <Layout
      headerOptions={{
        showLogo: true,
      }}
    >
      <h1>Hello {userName}</h1>
      <Button onClick={logout}>Log out</Button>
    </Layout>
  );
};

export default Home;
