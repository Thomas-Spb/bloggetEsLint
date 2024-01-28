import { createSlice } from '@reduxjs/toolkit';
import { postDataAsync } from './postDataActions';

const initinalState = {
  post: {},
  comments: [],
  error: '',
  status: '',
};

export const postDataSlice = createSlice({
  name: 'postData',
  initinalState,
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
