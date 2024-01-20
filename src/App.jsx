import Header from './components/Header';
import Main from './components/Main';
import { AuthContextProvider } from './context/authContext';
import { useDispatch } from 'react-redux';
import { PostsContextProvider } from './context/postsContext';
import { updateToken } from './store/tokenReducer';
import { getToken } from './api/token';
import { store } from './store/store';

const time = () => dispatch => {
  dispatch({ type: 'start' });

  setTimeout(() => {
    dispatch({ type: 'end' });
  }, 2000);
};

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  store.dispatch(time());
  return (
    <AuthContextProvider>
      <PostsContextProvider>
        <Header />
        <Main />
      </PostsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
