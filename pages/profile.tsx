import { Button } from 'components/Button';
import { Container } from 'components/Container';
import { ProfilePicture } from 'components/ProfilePicture';
import { Layout } from 'components/_Layout';
import { useAuth } from 'providers/AuthProvider';

const ProfilePage = () => {
  const { user, logout } = useAuth();

  return (
    <Layout
      headerOptions={{
        type: 'default',
        title: 'Profile',
      }}
    >
      <Container>
        <ProfilePicture imageUrl={user?.authUser.photoURL || ''} />
        <h1>{user?.authUser.displayName}</h1>
        <p>{user?.bio}</p>
        <Button onClick={logout}>Log out</Button>
      </Container>
    </Layout>
  );
};

export default ProfilePage;
