import { tokenReducer } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { tokenMiddleware } from './tokenReducer';

import { authReducer } from './auth/authReducer';
import { postsReducer } from './posts/postsReducer';

import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import postDataSlice from './postData/postDataSlice';
=======
import { postDataSlice } from './postData/postDataSlice';
>>>>>>> e71a121a519f6a6768c0d30ae6dc0ce8814072e2

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
