import PostCard from 'components/PostCard';
import { Layout } from 'components/_Layout';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <Layout
    headerOptions={{
      showLogo: true,
    }}
  >
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
  </Layout>
);

export default Home;
