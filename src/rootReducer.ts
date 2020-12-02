import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/users';

const combinedReducers = combineReducers({
  users: userReducer,
});

export default combinedReducers;
