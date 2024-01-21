import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { tokenMiddleware } from './tokenReducer';
import { thunk } from 'redux-thunk';
import { authReducer } from './auth/authReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
