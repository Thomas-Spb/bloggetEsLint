import { createSlice } from '@reduxjs/toolkit';
import { postDataAsync } from './postDataActions';

<<<<<<< HEAD
const initialState = {
=======
const initinalState = {
>>>>>>> e71a121a519f6a6768c0d30ae6dc0ce8814072e2
  post: {},
  comments: [],
  error: '',
  status: '',
<<<<<<< HEAD
  thomas: 'thomas',
=======
>>>>>>> e71a121a519f6a6768c0d30ae6dc0ce8814072e2
};

export const postDataSlice = createSlice({
  name: 'postData',
<<<<<<< HEAD
  initialState,
=======
  initinalState,
>>>>>>> e71a121a519f6a6768c0d30ae6dc0ce8814072e2
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(postDataAsync.pending, state => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(postDataAsync.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.post = action.payload.post;
        state.comments = action.payload.comments;
        state.error = '';
      })
      .addCase(postDataAsync.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error;
      });
  },
});

console.log(postDataSlice);

export default postDataSlice.reducer;
