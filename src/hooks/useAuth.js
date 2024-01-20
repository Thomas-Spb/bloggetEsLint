import { useEffect, useState } from 'react';
import { URL_API } from '../api/const';
import { useDispatch, useSelector } from 'react-redux';
import { delToken } from '../store/tokenReducer';

export const useAuth = () => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch;
  const [auth, setAuth] = useState({});

  useEffect(() => {
    // dispatch({ type: 'AUTH_REQUEST' });
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({ name, icon_img: iconImg }) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({ name, img });
        // dispatch({ type: 'AUTH_REQUEST_SUCCES' });
        const homeHref = window.location.href.split('#')[0];
        window.history.replaceState(null, null, homeHref);
      })

      .catch(err => {
        console.error(err);
        setAuth({});
        dispatch(delToken());
        // dispatch({ type: 'AUTH_REQUEST_ERROR' });
      });
  }, [token]);

  const clearAuth = () => setAuth({});
  return [auth, clearAuth];
};
