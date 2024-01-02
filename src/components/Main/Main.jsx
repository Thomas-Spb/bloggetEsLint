import Layout from '../Layout';
import { List } from './List/List';
import Tabs from './Tabs';

export const Main = () => (
  <main>
    <Layout>
      <Tabs />
      <List />
    </Layout>
  </main>
);
