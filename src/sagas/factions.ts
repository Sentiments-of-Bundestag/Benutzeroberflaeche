import { call, put, takeEvery } from 'redux-saga/effects';

import { Faction } from '../types';

import { request } from '../utils/client';
import {
  getFactionsStart,
  getFactionsSuccess,
  getFactionsFailed,
} from '../slices/factions';

const { REACT_APP_ENDPOINT_FACTIONS } = process.env;

const apiFactionsUrl = REACT_APP_ENDPOINT_FACTIONS || '';

function* handleGetFactions() {
  try {
    const factions: Faction[] = yield call(request, apiFactionsUrl);
    yield put(getFactionsSuccess(factions));
  } catch (error) {
    yield put(getFactionsFailed(error.toString()));
  }
}

export function* factionsSaga() {
  yield takeEvery(getFactionsStart.type, handleGetFactions);
}
