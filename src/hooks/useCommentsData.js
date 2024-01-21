import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postDataAsync } from '../store/postData/postDataReducer';

export const useCommentsData = id => {
  const token = useSelector(state => state.token.token);
  const data = useSelector(state => state.postData.data);
  //   console.log('DATA' data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postDataAsync(id));
    // console.log('dispatch postDataAsync ');
  }, [token]);

  return data;
};
