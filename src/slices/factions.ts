import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Faction, FactionGraph } from '../types';

interface FactionState {
  factions: Faction[];
  factionGraphs: FactionGraph[];
  areFactionsLoading: boolean;
  areFactionGraphsLoading: boolean;
  error?: string;
}

export const initialState: FactionState = {
  factions: [],
  factionGraphs: [],
  areFactionsLoading: false,
  areFactionGraphsLoading: false,
};

const factionSlice = createSlice({
  name: 'faction',
  initialState,
  reducers: {
    getFactionsStart(state) {
      state.areFactionsLoading = true;
      state.error = undefined;
      state.factions = [];
    },
    getFactionsSuccess(state, { payload }: PayloadAction<Faction[]>) {
      state.factions = payload;
      state.areFactionsLoading = false;
    },
    getFactionsFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.factions = [];
      state.areFactionsLoading = false;
    },
    getFactionGraphsStart(state) {
      state.areFactionGraphsLoading = true;
      state.error = undefined;
      state.factionGraphs = [];
    },
    getFactionGraphsSuccess(state, { payload }: PayloadAction<FactionGraph[]>) {
      state.factionGraphs = payload;
      state.areFactionGraphsLoading = false;
    },
    getFactionGraphsFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.factionGraphs = [];
      state.areFactionGraphsLoading = false;
    },
  },
});

export const {
  getFactionsStart,
  getFactionsSuccess,
  getFactionsFailed,
  getFactionGraphsStart,
  getFactionGraphsSuccess,
  getFactionGraphsFailed,
} = factionSlice.actions;

export default factionSlice.reducer;
