import { call, put, takeEvery } from 'redux-saga/effects';

import { Person } from '../types';

import { request } from '../utils/client';
import {
  getPersonsStart,
  getPersonsSuccess,
  getPersonsFailed,
} from '../slices/persons';

const { REACT_APP_ENDPOINT_PERSONS } = process.env;

const apiPersonsUrls = REACT_APP_ENDPOINT_PERSONS || '';

function* handleGetPersons() {
  try {
    const persons: Person[] = yield call(request, apiPersonsUrls);
    yield put(getPersonsSuccess(persons));
  } catch (error) {
    yield put(getPersonsFailed(error.toString()));
  }
}

export function* personsSaga() {
  yield takeEvery(getPersonsStart.type, handleGetPersons);
}
