import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import List from './List';
import Tabs from './Tabs';
import { Modal } from '../Modal/Modal';
import { StartPage } from '../Pages/StartPage/StartPage';
import ErrorPage from '../Pages/ErrorPage';

export const Main = () => (
  <main>
    <Layout>
      <Tabs />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/auth" element={<StartPage />} />
        <Route path="/category/:page" element={<List />}>
<<<<<<< HEAD
          <Route path="post/:id" element={<Modal />} />
=======
          <Route path="post/:id" element={<Modal />}></Route>
>>>>>>> e71a121a519f6a6768c0d30ae6dc0ce8814072e2
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  </main>
);
