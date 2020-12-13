import { createSelector } from '@reduxjs/toolkit';

import { AppState } from '../store';
import { initialState } from '../slices/factions';

const factionsDomain = (state: AppState) => state.factions || initialState;

export const getAllFactions = createSelector(
  [factionsDomain],
  (factionsState) => factionsState,
);
