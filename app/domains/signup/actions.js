import axios from 'axios';
import actionTypes from './actionTypes';
import endpoints from '../../utils/endpoints';

export const signUpUserSuccess = (data) => {
  return {
    type: actionTypes.SIGN_UP_USER_SUCCESS,
    payload: data
  }
};

export const signUpUserFailure = (error) => {
  return {
    type: actionTypes.SIGN_UP_USER_FAILURE,
    payload: error
  }
};

export const signUpUser = (firstName, secondName, email, password, confirmPassword) => (dispatch => {
  axios.post(endpoints.singUpUser(), {firstName, secondName, email, password, confirmPassword})
     .then(response => dispatch(signUpUserSuccess(response.data)))
     .catch(error => dispatch(signUpUserFailure(error)));
  return {
    type: actionTypes.SIGN_UP_USER
  };
});