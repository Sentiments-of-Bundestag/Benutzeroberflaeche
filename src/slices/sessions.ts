import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Session } from '../types';

interface SessionState {
  sessions: Session[];
  areSessionsLoading: boolean;
  error?: string;
}

export const initialState: SessionState = {
  sessions: [],
  areSessionsLoading: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    getSessionsStart(state) {
      state.areSessionsLoading = true;
      state.error = undefined;
      state.sessions = [];
    },
    getSessionsSuccess(state, { payload }: PayloadAction<Session[]>) {
      state.sessions = payload;
      state.areSessionsLoading = false;
    },
    getSessionsFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.sessions = [];
      state.areSessionsLoading = false;
    },
  },
});

export const {
  getSessionsStart,
  getSessionsSuccess,
  getSessionsFailed,
} = sessionSlice.actions;

export default sessionSlice.reducer;
