import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  Faction,
  FactionGraph,
  FactionProportion,
  FactionRanked,
} from '../types';

interface FactionState {
  factions: Faction[];
  factionGraphs: FactionGraph[];
  factionProportion: FactionProportion[];
  factionRanks: FactionRanked[];
  areFactionsLoading: boolean;
  areFactionProportionLoading: boolean;
  areFactionGraphsLoading: boolean;
  areFactionRanksLoading: boolean;
  error?: string;
}

export const initialState: FactionState = {
  factions: [],
  factionGraphs: [],
  factionRanks: [],
  factionProportion: [],
  areFactionsLoading: false,
  areFactionGraphsLoading: false,
  areFactionRanksLoading: false,
  areFactionProportionLoading: false,
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
    getFactionRanksStart(state) {
      state.areFactionRanksLoading = true;
      state.error = undefined;
      state.factionRanks = [];
    },
    getFactionRanksSuccess(state, { payload }: PayloadAction<FactionRanked[]>) {
      state.factionRanks = payload;
      state.areFactionRanksLoading = false;
    },
    getFactionRanksFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.factionRanks = [];
      state.areFactionRanksLoading = false;
    },
    getFactionProportionsStart(state) {
      state.areFactionProportionLoading = true;
      state.error = undefined;
      state.factionProportion = [];
    },
    getFactionProportionsSuccess(
      state,
      { payload }: PayloadAction<FactionProportion[]>,
    ) {
      state.factionProportion = payload;
      state.areFactionProportionLoading = false;
    },
    getFactionProportionsFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.factionProportion = [];
      state.areFactionProportionLoading = false;
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
  getFactionRanksStart,
  getFactionRanksSuccess,
  getFactionRanksFailed,
  getFactionProportionsFailed,
  getFactionProportionsStart,
  getFactionProportionsSuccess,
} = factionSlice.actions;

export default factionSlice.reducer;
