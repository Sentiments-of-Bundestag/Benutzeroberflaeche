import { call, put, takeEvery } from 'redux-saga/effects';

import { Faction, FactionGraph, FactionRanked } from '../types';

import { request } from '../utils/client';
import {
  getFactionsStart,
  getFactionsSuccess,
  getFactionsFailed,
  getFactionGraphsStart,
  getFactionGraphsSuccess,
  getFactionGraphsFailed,
  getFactionRanksStart,
  getFactionRanksSuccess,
  getFactionRanksFailed,
} from '../slices/factions';

const {
  REACT_APP_ENDPOINT_FACTIONS,
  REACT_APP_ENDPOINT_FACTION_GRAPHS,
  REACT_APP_ENDPOINT_FACTION_RANKS,
} = process.env;

const apiFactionsUrl = REACT_APP_ENDPOINT_FACTIONS || '';
const apiFactionGraphsUrl = REACT_APP_ENDPOINT_FACTION_GRAPHS || '';
const apiFactionRanksUrl = REACT_APP_ENDPOINT_FACTION_RANKS || '';

function* handleGetFactions() {
  try {
    const factions: Faction[] = yield call(request, apiFactionsUrl);
    yield put(getFactionsSuccess(factions));
  } catch (error) {
    yield put(getFactionsFailed(error.toString()));
  }
}

function* handleGetFactionGraphs() {
  try {
    const response = yield call(request, apiFactionGraphsUrl);
    if (Object.prototype.hasOwnProperty.call(response, 'messages')) {
      const factionGraphs: FactionGraph[] = response.messages;
      yield put(getFactionGraphsSuccess(factionGraphs));
    } else {
      yield put(getFactionGraphsFailed('Response has no property messages'));
    }
  } catch (error) {
    yield put(getFactionGraphsFailed(error.toString()));
  }
}

function* handleGetFactionRanks() {
  try {
    const factions: FactionRanked[] = yield call(request, apiFactionRanksUrl);
    yield put(getFactionRanksSuccess(factions));
  } catch (error) {
    yield put(getFactionRanksFailed(error.toString()));
  }
}

export function* factionsSaga() {
  yield takeEvery(getFactionsStart.type, handleGetFactions);
  yield takeEvery(getFactionGraphsStart.type, handleGetFactionGraphs);
  yield takeEvery(getFactionRanksStart.type, handleGetFactionRanks);
}
