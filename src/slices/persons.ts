import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Person, PersonGraph, PersonMessage, PersonRanked } from '../types';

interface PersonsState {
  persons: Person[];
  personMessages: PersonMessage[];
  personGraphs: PersonGraph[];
  personRanks: PersonRanked[];
  arePersonsLoading: boolean;
  arePersonMessagesLoading: boolean;
  arePersonGraphsLoading: boolean;
  arePersonRanksLoading: boolean;
  error?: string;
}

export const initialState: PersonsState = {
  persons: [],
  personMessages: [],
  personGraphs: [],
  personRanks: [],
  arePersonsLoading: false,
  arePersonMessagesLoading: false,
  arePersonGraphsLoading: false,
  arePersonRanksLoading: false,
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
    getPersonMessagesStart(state) {
      state.arePersonMessagesLoading = true;
      state.error = undefined;
      state.personMessages = [];
    },
    getPersonMessagesSuccess(
      state,
      { payload }: PayloadAction<PersonMessage[]>,
    ) {
      state.personMessages = payload;
      state.arePersonMessagesLoading = false;
    },
    getPersonMessagesFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.personGraphs = [];
      state.arePersonGraphsLoading = false;
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
    getPersonRanksStart(state) {
      state.arePersonRanksLoading = true;
      state.error = undefined;
      state.personRanks = [];
    },
    getPersonRanksSuccess(state, { payload }: PayloadAction<PersonRanked[]>) {
      state.personRanks = payload;
      state.arePersonRanksLoading = false;
    },
    getPersonRanksFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.personRanks = [];
      state.arePersonRanksLoading = false;
    },
  },
});

export const {
  getPersonsStart,
  getPersonsSuccess,
  getPersonsFailed,
  getPersonMessagesStart,
  getPersonMessagesSuccess,
  getPersonMessagesFailed,
  getPersonGraphsStart,
  getPersonGraphsSuccess,
  getPersonGraphsFailed,
  getPersonRanksStart,
  getPersonRanksSuccess,
  getPersonRanksFailed,
} = personSlice.actions;

export default personSlice.reducer;
