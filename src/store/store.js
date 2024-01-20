import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { tokenMiddleware } from './tokenReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
