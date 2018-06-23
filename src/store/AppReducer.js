import {
  SET_API_REQUEST_ERROR,
  SET_API_REQUEST_INIT,
  SET_API_REQUEST_SUCCESS,
  UNSET_ERROR_MESSAGE
} from '../actions/AppAction';

const initialState = {
  app: {
    error: null,
    loading: false
  }
};

export default (state = initialState.app, action) => {
  switch (action.type) {
    case SET_API_REQUEST_INIT:
      return { ...state, loading: true };
    case SET_API_REQUEST_SUCCESS:
      return { ...state, loading: false };
    case SET_API_REQUEST_ERROR:
      return { ...state, error: action.payload.error, loading: false };
    case UNSET_ERROR_MESSAGE:
      return { ...state, error: null };
    default:
      return state;
  }
};
