import { call, put, takeEvery } from 'redux-saga/effects';

import { Faction, FactionGraph } from '../types';

import { request } from '../utils/client';
import {
  getFactionsStart,
  getFactionsSuccess,
  getFactionsFailed,
  getFactionGraphsStart,
  getFactionGraphsSuccess,
  getFactionGraphsFailed,
} from '../slices/factions';

const {
  REACT_APP_ENDPOINT_FACTIONS,
  REACT_APP_ENDPOINT_FACTION_GRAPHS,
} = process.env;

const apiFactionsUrl = REACT_APP_ENDPOINT_FACTIONS || '';
const apiFactionGraphsUrl = REACT_APP_ENDPOINT_FACTION_GRAPHS || '';

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

export function* factionsSaga() {
  yield takeEvery(getFactionsStart.type, handleGetFactions);
  yield takeEvery(getFactionGraphsStart.type, handleGetFactionGraphs);
}
