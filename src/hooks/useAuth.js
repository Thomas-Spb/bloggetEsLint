import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout, authrequestAsync } from '../store/auth/action';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.token.token);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authrequestAsync());
  }, [token]);

  const clearAuth = () => dispatch(authLogout());
  return [auth, loading, clearAuth];
};
