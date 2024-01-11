import cls from './Auth.module.css';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../../UI/Text';
import { useState, useContext } from 'react';
import { tokenContext } from '../../../context/tokenContext';
import { authContext } from '../../../context/authContext';

export const Auth = () => {
  const { delToken } = useContext(tokenContext);
  const [showLogout, setShowLogout] = useState(true);
  const { auth, clearAuth } = useContext(authContext);

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const handleDelToken = () => {
    delToken();
    clearAuth();
  };

  return (
    <div className={cls.container}>
      {auth.name ? (
        <>
          <button className={cls.btn} onClick={getOut}>
            <img
              className={cls.img}
              src={auth.img}
              title={auth.name}
              alt={auth.name}
            />
          </button>
          {showLogout && (
            <button
              className={cls.logout}
              onClick={() => {
                handleDelToken();
              }}
            >
              Выйти
            </button>
          )}
        </>
      ) : (
        <Text className={cls.authLink} As="a" href={urlAuth}>
          <LoginIcon className={cls.svg} width={30} height={30} />
        </Text>
      )}
    </div>
  );
};
