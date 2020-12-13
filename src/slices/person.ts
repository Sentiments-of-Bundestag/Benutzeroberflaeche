import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Person } from '../types';

interface PersonsState {
  persons: Person[];
  arePersonsLoading: boolean;
  error?: string;
}

export const initialState: PersonsState = {
  persons: [],
  arePersonsLoading: false,
};

const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    getPersonsStart(state) {
      state.arePersonsLoading = true;
      state.error = undefined;
      state.persons = [];
    },
    getPersonsSuccess(state, { payload }: PayloadAction<Person[]>) {
      state.persons = payload;
      state.arePersonsLoading = false;
    },
    getPersonsFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.persons = [];
      state.arePersonsLoading = false;
    },
  },
});

export const {
  getPersonsStart,
  getPersonsSuccess,
  getPersonsFailed,
} = personSlice.actions;

export default personSlice.reducer;
