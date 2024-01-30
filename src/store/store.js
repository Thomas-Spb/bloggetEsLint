import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { tokenMiddleware } from './tokenReducer';
import { thunk } from 'redux-thunk';
import { authReducer } from './auth/authReducer';
import { postsReducer } from './posts/postsReducer';
import { postDataReducer } from './postData/postDataReducer';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    auth: authReducer,
    posts: postsReducer,
    postData: postDataSlice,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
