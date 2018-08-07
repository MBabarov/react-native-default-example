import axios from 'axios';
import actionTypes from './actionTypes';
import endpoints from '../../utils/endpoints';

export const loginUserSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_USER_SUCCESS,
    payload: data
  }
};

export const loginUserFailure = (error) => {
  return {
    type: actionTypes.LOGIN_USER_FAILURE,
    payload: error
  }
};

export const loginUser = (email, password) => (dispatch => {
  axios.post(endpoints.loginUser(), {"email": email, "password": password})
     .then(response => dispatch(loginUserSuccess(response.data)))
     .catch(error => dispatch(loginUserFailure(error)));
  return dispatch({type: actionTypes.LOGIN_USER})
});