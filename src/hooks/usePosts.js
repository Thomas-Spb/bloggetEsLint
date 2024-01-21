import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRequestAsync } from '../store/posts/postsActions';

export const usePosts = () => {
  const token = useSelector(state => state.token.token);
  const posts = useSelector(state => state.posts.data);
  const loading = useSelector(state => state.posts.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postRequestAsync());
  }, [token]);

  return [posts, loading];
};
