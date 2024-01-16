import { createStore } from 'redux';
import { setToken, getToken } from '../api/token';

const initinalState = {
  comment: 'Redux Hi',
  token: getToken(),
};

const UPDATE_COMMENT = 'UPDATE-COMMENT';
const UPDATE_TOKEN = 'UPDATE-TOKEN';
const DELETE_TOKEN = 'DELETE-TOKEN';

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment,
});

export const updateToken = token => ({
  type: UPDATE_TOKEN,
  token,
});

export const delToken = () => ({
  type: DELETE_TOKEN,
  token: '',
});

const rootReducer = (state = initinalState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };

    case UPDATE_TOKEN:
      setToken(action.token);
      return {
        ...state,
        token: action.token,
      };

    case DELETE_TOKEN:
      setToken('');
      return {
        ...state,
        token: '',
      };

    default:
      return state;
  }
};
export const store = createStore(rootReducer);
