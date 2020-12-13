import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Person, PersonGraph } from '../types';

interface PersonsState {
  persons: Person[];
  personGraphs: PersonGraph[];
  arePersonsLoading: boolean;
  arePersonGraphsLoading: boolean;
  error?: string;
}

export const initialState: PersonsState = {
  persons: [],
  personGraphs: [],
  arePersonsLoading: false,
  arePersonGraphsLoading: false,
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
    getPersonGraphsStart(state) {
      state.arePersonGraphsLoading = true;
      state.error = undefined;
      state.personGraphs = [];
    },
    getPersonGraphsSuccess(state, { payload }: PayloadAction<PersonGraph[]>) {
      state.personGraphs = payload;
      state.arePersonGraphsLoading = false;
    },
    getPersonGraphsFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.personGraphs = [];
      state.arePersonGraphsLoading = false;
    },
  },
});

export const {
  getPersonsStart,
  getPersonsSuccess,
  getPersonsFailed,
  getPersonGraphsStart,
  getPersonGraphsSuccess,
  getPersonGraphsFailed,
} = personSlice.actions;

export default personSlice.reducer;
