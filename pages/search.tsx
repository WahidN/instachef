import { Container } from 'components/Container';
import { Layout } from 'components/_Layout';
import type { NextPage } from 'next';

const Search: NextPage = () => (
  <Layout
    headerOptions={{
      type: 'search',
      title: 'Search',
    }}
  >
    <Container>
      <h1>Search</h1>
    </Container>
  </Layout>
);

export default Search;
