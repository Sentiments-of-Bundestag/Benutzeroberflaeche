import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '../store';
import { initialState } from '../slices/factions';

const personsDomain = (state: AppState) => state.persons || initialState;

export const getAllPersons = createSelector(
  [personsDomain],
  (personsState) => personsState,
);
