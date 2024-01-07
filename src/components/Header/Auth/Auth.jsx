import cls from './Auth.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../../UI/Text';
import { useEffect, useState } from 'react';
import { URL_API } from '../../../api/const';

export const Auth = ({ token, delToken }) => {
  const [auth, setAuth] = useState({});
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(({ name, icon_img: iconImg }) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({ name, img });
      })
      .catch(err => {
        console.err(err);
        setAuth({});
      });
  }, [token]);

  //   const handleDelToken = () => {
  //     useEffect(() => {
  //       delToken = true;
  //       setAuth({});
  //     }, [delToken]);
  //   };

  return (
    <div className={cls.container}>
      {auth.name ? (
        <>
          <button className={cls.btn}>
            <img className={cls.img} src={auth.img} title={auth.name} alt={auth.name} />
          </button>
          <button
            className={cls.logout}
            onClick={() => {
              delToken();
            }}
          >
            Выйти
          </button>
        </>
      ) : (
        <Text className={cls.authLink} As="a" href={urlAuth}>
          <LoginIcon className={cls.svg} width={30} height={30} />
        </Text>
      )}
    </div>
  );
};
Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
