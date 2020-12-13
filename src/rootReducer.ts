import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/users';
import factionReducer from './slices/factions';
import personReducer from './slices/persons';

const combinedReducers = combineReducers({
  users: userReducer,
  factions: factionReducer,
  persons: personReducer,
});

export default combinedReducers;
