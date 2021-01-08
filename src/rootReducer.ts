import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/users';
import factionReducer from './slices/factions';
import personReducer from './slices/persons';
import sessionReducer from './slices/sessions';

const combinedReducers = combineReducers({
  users: userReducer,
  factions: factionReducer,
  persons: personReducer,
  sessions: sessionReducer,
});

export default combinedReducers;
