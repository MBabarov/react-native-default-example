import React, { Component } from 'react';
import { Text } from 'react-native';
import { Root } from 'native-base';
import { Navigate } from './utils/navigation';
import reducers from './domains/reducers';

import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(combineReducers(reducers), compose(applyMiddleware(thunk)));

export default class App extends Component {
  render() {
    return(<Provider store={store}><Root><Navigate /></Root></Provider>);
  }
}