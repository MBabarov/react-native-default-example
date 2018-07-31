import actionTypes from './actionTypes';

const initialState = {
  data: {},
  isFetching: false,
  error: undefined
};

export default function signUpReducer(state = initialState, action)  {
  switch (action.type) {
    case actionTypes.SIGN_UP_USER: {
      return {
        ...state,
        isFetching: true
      };
    }
    case actionTypes.SIGN_UP_USER_SUCCESS: {
      return Object.assign({}, state, {
        data: action,
        isFetching: false
      })
    }
    case actionTypes.SIGN_UP_USER_FAILURE: {
      return Object.assign({}, state, {
        error: action.payload,
        isFetching: false
      })
    }
    default:
      return state
  }
};