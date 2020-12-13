import { call, put, takeEvery } from 'redux-saga/effects';

import { Person, PersonGraph } from '../types';

import { request } from '../utils/client';
import {
  getPersonsStart,
  getPersonsSuccess,
  getPersonsFailed,
  getPersonGraphsStart,
  getPersonGraphsSuccess,
  getPersonGraphsFailed,
} from '../slices/persons';

const {
  REACT_APP_ENDPOINT_PERSONS,
  REACT_APP_ENDPOINT_PERSON_GRAPH,
} = process.env;

const apiPersonsUrls = REACT_APP_ENDPOINT_PERSONS || '';
const apiPersonGraphsUrls = REACT_APP_ENDPOINT_PERSON_GRAPH || '';

function* handleGetPersons() {
  try {
    const persons: Person[] = yield call(request, apiPersonsUrls);
    yield put(getPersonsSuccess(persons));
  } catch (error) {
    yield put(getPersonsFailed(error.toString()));
  }
}

function* handleGetPersonGraphs() {
  try {
    const response = yield call(request, apiPersonGraphsUrls);
    if (Object.prototype.hasOwnProperty.call(response, 'messages')) {
      const personGraphs: PersonGraph[] = response.messages;
      yield put(getPersonGraphsSuccess(personGraphs));
    } else {
      yield put(getPersonGraphsFailed('Response has no property messages'));
    }
  } catch (error) {
    yield put(getPersonGraphsFailed(error.toString()));
  }
}

export function* personsSaga() {
  yield takeEvery(getPersonsStart.type, handleGetPersons);
  yield takeEvery(getPersonGraphsStart.type, handleGetPersonGraphs);
}
