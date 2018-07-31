import React from 'react';
import SignUpScreen from './SignUpScreen';
import {connect} from 'react-redux';
import { signUpUser } from '../../domains/signup/actions';

const mapStateToProps = (state) => {
  console.log('!!signup', state);
  return ({
    signUpData: state && state.signUpReducer
  })
};

const mapDispatchToProps = dispatch => {
  return {
    signUpUser: (firstName, secondName, email, password, confirmPassword) => dispatch(
      signUpUser(firstName, secondName, email, password, confirmPassword)
    )
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreen)
