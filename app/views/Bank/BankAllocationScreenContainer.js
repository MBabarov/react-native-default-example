import React from 'react';
import BankAllocationScreen from './BankAllocationScreen';
import {connect} from 'react-redux';
import {loginUser} from '../../domains/bank/actions';

const mapStateToProps = (state) => {
  console.log('!!login', state);
  return ({
    loginData: state && state.loginReducer
  })
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (user, password) => dispatch(loginUser(user, password))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankAllocationScreen)
