import { useState, useEffect } from 'react';

export const useToken = state => {
  const [token, setToken] = useState(state);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      const token = new URLSearchParams(location.hash.substring(1)).get('access_token');
      setToken(token);
    }
    console.log(auth);
    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer'));
      setAuth(true);
    }
  }, [auth]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  const delToken = () => {
    localStorage.removeItem('bearer');
    // console.log('12');
    // setAuth(false);
    // setToken(false);
  };

  return [token, delToken];
};
