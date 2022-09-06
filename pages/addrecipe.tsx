import { Container } from 'components/Container';
import { Layout } from 'components/_Layout';

const addPost = () => (
  <Layout
    headerOptions={{
      type: 'default',
      title: 'Add recipe',
    }}
  >
    <Container>
      <h1>Add Recipe</h1>
    </Container>
  </Layout>
);

export default addPost;
