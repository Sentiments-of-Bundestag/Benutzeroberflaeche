import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/users';
import factionReducer from './slices/factions';

const combinedReducers = combineReducers({
  users: userReducer,
  factions: factionReducer,
});

export default combinedReducers;
