import { combineReducers } from 'redux';

import headerReducer from './headerReducer';

const reducers: object = {
  header: headerReducer
};

export default combineReducers(reducers);
