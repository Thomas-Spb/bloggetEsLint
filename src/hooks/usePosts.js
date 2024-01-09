import { useContext, useEffect, useState } from 'react';
import { tokenContext } from '../context/tokenContext';
import { URL_API } from '../api/const';
// import { postsContext } from '../context/postsContext';

export const usePosts = () => {
  const [posts, setPosts] = useState({});
  const { token } = useContext(tokenContext);
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best`, {
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
      .then(data => {
        if (!data) return;
        setPosts(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [token]);

  return [posts, setPosts];
};
