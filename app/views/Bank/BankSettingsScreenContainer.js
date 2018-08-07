import React from 'react';
import BankSettingsScreen from './BankSettingsScreen';
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
)(BankSettingsScreen)
