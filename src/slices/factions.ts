import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Faction, FactionMessage } from '../types';

interface FactionState {
  factions: Faction[];
  factionMessages: FactionMessage[];
  areMessagesLoading: boolean;
  areFactionsMessagesLoading: boolean;
  error?: string;
}

export const initialState: FactionState = {
  factions: [],
  factionMessages: [],
  areMessagesLoading: false,
  areFactionsMessagesLoading: false,
};

const factionSlice = createSlice({
  name: 'faction',
  initialState,
  reducers: {
    getFactionsStart(state) {
      state.areMessagesLoading = true;
      state.error = undefined;
      state.factions = [];
    },
    getFactionsSuccess(state, { payload }: PayloadAction<Faction[]>) {
      state.factions = payload;
      state.areMessagesLoading = false;
    },
    getFactionsFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.factions = [];
      state.areMessagesLoading = false;
    },
    getFactionMessagesStart(state) {
      state.areFactionsMessagesLoading = true;
      state.error = undefined;
      state.factionMessages = [];
    },
    getFactionMessagesSuccess(
      state,
      { payload }: PayloadAction<FactionMessage[]>,
    ) {
      state.factionMessages = payload;
      state.areFactionsMessagesLoading = false;
    },
    getFactionMessagesFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.factionMessages = [];
      state.areFactionsMessagesLoading = false;
    },
  },
});

export const {
  getFactionsStart,
  getFactionsSuccess,
  getFactionsFailed,
  getFactionMessagesStart,
  getFactionMessagesSuccess,
  getFactionMessagesFailed,
} = factionSlice.actions;

export default factionSlice.reducer;
