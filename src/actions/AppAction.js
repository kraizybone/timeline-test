export const SET_API_REQUEST_INIT = 'SET_API_REQUEST_INIT';
export const SET_API_REQUEST_SUCCESS = 'SET_API_REQUEST_SUCCESS';
export const SET_API_REQUEST_ERROR = 'SET_API_REQUEST_ERROR';
export const UNSET_ERROR_MESSAGE = 'UNSET_ERROR_MESSAGE';

export const initApiRequest = () => {
  return {
    type: SET_API_REQUEST_INIT
  };
};

export const setApiRequestSuccess = () => {
  return {
    type: SET_API_REQUEST_SUCCESS
  };
};

export const setApiReuestError = (error = null) => {
  return {
    type: SET_API_REQUEST_ERROR,
    payload: {
      error
    }
  };
};

export const clearErrorMessage = () => {
  return {
    type: UNSET_ERROR_MESSAGE
  };
};
