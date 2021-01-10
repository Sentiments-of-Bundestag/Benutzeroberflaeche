import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '../store';
import { initialState } from '../slices/users';

const sessionsDomain = (state: AppState) => state.sessions || initialState;

export const getAllSessions = createSelector(
  [sessionsDomain],
  (sessionState) => sessionState,
);
