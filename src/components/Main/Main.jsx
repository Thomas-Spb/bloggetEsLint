import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import List from './List';
import Tabs from './Tabs';
import { Modal } from '../Modal/Modal';

export const Main = () => (
  <main>
    <Layout>
      <Tabs />
      <Routes>
        <Route path="/category/:page" element={<List />}>
          <Route path="post/:id" elemnt={<Modal />} />
        </Route>
      </Routes>
    </Layout>
  </main>
);
