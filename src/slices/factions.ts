import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Faction } from '../types';

interface FactionState {
  factions: Faction[];
  isLoading: boolean;
  error?: string;
}

export const initialState: FactionState = { factions: [], isLoading: false };

const factionSlice = createSlice({
  name: 'faction',
  initialState,
  reducers: {
    getFactionsStart(state) {
      state.isLoading = true;
      state.error = undefined;
      state.factions = [];
    },
    getFactionsSuccess(state, { payload }: PayloadAction<Faction[]>) {
      state.factions = payload;
      state.isLoading = false;
    },
    getFactionsFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.factions = [];
      state.isLoading = false;
    },
  },
});

export const {
  getFactionsStart,
  getFactionsSuccess,
  getFactionsFailed,
} = factionSlice.actions;

export default factionSlice.reducer;
