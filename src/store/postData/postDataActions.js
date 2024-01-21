import {
  POST_DATA,
  POST_DATA_ERROR,
  POST_DATA_SUCCES,
} from './postDataReducer';

const initinalState = {
  loading: false,
  data: {},
  error: '',
};

export const postDataReducer = (state = initinalState, action) => {
  switch (action.type) {
    case POST_DATA:
      return {
        ...state,
        loading: true,
        data: {},
        error: '',
      };

    case POST_DATA_SUCCES: {
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };
    }

    case POST_DATA_ERROR:
      return {
        ...state,
        loading: false,
        erorr: action.error,
      };

    default:
      return state;
  }
};
