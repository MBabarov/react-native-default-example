import actionTypes from './actionTypes';

const initialState = {
  data: {},
  isFetching: false,
  error: undefined
};

export default function loginReducer(state = initialState, action)  {
  switch (action.type) {
    case actionTypes.LOGIN_USER: {
      return {
        ...state,
        isFetching: true
      };
    }
    case actionTypes.LOGIN_USER_SUCCESS: {
      return Object.assign({}, state, {
        data: action,
        isFetching: false
      })
    }
    case actionTypes.LOGIN_USER_FAILURE: {
      return Object.assign({}, state, {
        error: action.payload,
        isFetching: false
      })
    }
    default:
      return state
  }
};