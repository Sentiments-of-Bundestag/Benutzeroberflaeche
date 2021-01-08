import { call, put, takeEvery } from 'redux-saga/effects';

import { Session } from '../types';

import { request } from '../utils/client';
import {
  getSessionsStart,
  getSessionsSuccess,
  getSessionsFailed,
} from '../slices/sessions';

const { REACT_APP_ENDPOINT_SESSIONS } = process.env;

const apiSessionsUrl = REACT_APP_ENDPOINT_SESSIONS || '';

function* handleGetSessions() {
  try {
    const sessions: Session[] = yield call(request, apiSessionsUrl);
    yield put(getSessionsSuccess(sessions));
  } catch (error) {
    yield put(getSessionsFailed(error.toString()));
  }
}

export function* sessionsSaga() {
  yield takeEvery(getSessionsStart.type, handleGetSessions);
}
