import cls from './Header.module.css';
import Auth from './Auth';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Heading from './Heading';
import PropTypes from 'prop-types';

export const Header = ({ token, delToken }) => (
  <header className={cls.header}>
    <Layout>
      <div className={cls.gridContainer}>
        <Logo />
        <Heading text="React" />
        <Search />
        <Auth token={token} delToken={delToken} />
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
