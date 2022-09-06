import { Container } from 'components/Container';
import { Layout } from 'components/_Layout';
import type { NextPage } from 'next';

const Favorites: NextPage = () => (
  <Layout
    headerOptions={{
      type: 'default',
      title: 'Favorites',
    }}
  >
    <Container>
      <h1>favorites</h1>
    </Container>
  </Layout>
);

export default Favorites;
