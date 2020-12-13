import { call, put, takeEvery } from 'redux-saga/effects';

import { Faction, FactionMessage } from '../types';

import { request } from '../utils/client';
import {
  getFactionsStart,
  getFactionsSuccess,
  getFactionsFailed,
  getFactionMessagesStart,
  getFactionMessagesSuccess,
  getFactionMessagesFailed,
} from '../slices/factions';

const {
  REACT_APP_ENDPOINT_FACTIONS,
  REACT_APP_ENDPOINT_FACTION_MESSAGES,
} = process.env;

const apiFactionsUrl = REACT_APP_ENDPOINT_FACTIONS || '';
const apiFactionMessagesUrl = REACT_APP_ENDPOINT_FACTION_MESSAGES || '';

function* handleGetFactions() {
  try {
    const factions: Faction[] = yield call(request, apiFactionsUrl);
    yield put(getFactionsSuccess(factions));
  } catch (error) {
    yield put(getFactionsFailed(error.toString()));
  }
}

function* handleGetFactionMessages() {
  try {
    const response = yield call(request, apiFactionMessagesUrl);
    if (Object.prototype.hasOwnProperty.call(response, 'messages')) {
      const factionMessages: FactionMessage[] = response.messages;
      yield put(getFactionMessagesSuccess(factionMessages));
    } else {
      yield put(getFactionMessagesFailed('Response has no property messages'));
    }
  } catch (error) {
    yield put(getFactionMessagesFailed(error.toString()));
  }
}

export function* factionsSaga() {
  yield takeEvery(getFactionsStart.type, handleGetFactions);
  yield takeEvery(getFactionMessagesStart.type, handleGetFactionMessages);
}
