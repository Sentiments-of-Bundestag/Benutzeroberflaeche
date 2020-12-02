import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '../store';
import { initialState } from '../slices/users';

const usersDomain = (state: AppState) => state.users || initialState;

export const getAllUsers = createSelector(
  [usersDomain],
  (usersState) => usersState,
);
