import { useEffect, useRef, useState } from 'react';
import { URL_API } from '../api/const';
import { useSelector } from 'react-redux';

export const useCommentsData = id => {
  const token = useSelector(state => state.token.token);
  const [commentsData, setCommentsData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const isFetching = useRef(false);
  useEffect(() => {
    if (isFetching.current) return;
    if (!token) return;
    isFetching.current = true;
    setIsLoading(true);
    fetch(`${URL_API}/comments/${id}`, {
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
      .then(
        ([
          {
            data: {
              children: [{ data: post }],
            },
          },
          {
            data: { children },
          },
        ]) => {
          const comments = children.map(item => item.data);
          //   console.log(comments);

          setCommentsData([post, comments]);
        },
      )
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [token]);

  return [commentsData, isLoading];
};
