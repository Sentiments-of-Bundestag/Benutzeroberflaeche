import { call, put, takeEvery } from 'redux-saga/effects';

import { Person, PersonGraph, PersonMessage, PersonRanked } from '../types';

import { request } from '../utils/client';
import {
  getPersonsStart,
  getPersonsSuccess,
  getPersonsFailed,
  getPersonGraphsStart,
  getPersonGraphsSuccess,
  getPersonGraphsFailed,
  getPersonMessagesStart,
  getPersonMessagesSuccess,
  getPersonMessagesFailed,
  getPersonRanksStart,
  getPersonRanksSuccess,
  getPersonRanksFailed,
} from '../slices/persons';

const {
  REACT_APP_ENDPOINT_PERSONS,
  REACT_APP_ENDPOINT_PERSON_GRAPHS,
  REACT_APP_ENDPOINT_PERSON_MESSAGES,
  REACT_APP_ENDPOINT_PERSON_RANKS,
} = process.env;

const apiPersonsUrls = REACT_APP_ENDPOINT_PERSONS || '';
const apiPersonGraphsUrls = REACT_APP_ENDPOINT_PERSON_GRAPHS || '';
const apiPersonMessagesUrls = REACT_APP_ENDPOINT_PERSON_MESSAGES || '';
const apiPersonRanksUrls = REACT_APP_ENDPOINT_PERSON_RANKS || '';

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

function* handleGetPersonMessages() {
  try {
    const personMessages: PersonMessage[] = yield call(
      request,
      apiPersonMessagesUrls,
    );
    yield put(getPersonMessagesSuccess(personMessages));
  } catch (error) {
    yield put(getPersonMessagesFailed(error.toString()));
  }
}

function* handleGetPersonRanks() {
  try {
    const personRanks: PersonRanked[] = yield call(request, apiPersonRanksUrls);
    yield put(getPersonRanksSuccess(personRanks));
  } catch (error) {
    yield put(getPersonRanksFailed(error.toString()));
  }
}

export function* personsSaga() {
  yield takeEvery(getPersonsStart.type, handleGetPersons);
  yield takeEvery(getPersonGraphsStart.type, handleGetPersonGraphs);
  yield takeEvery(getPersonMessagesStart.type, handleGetPersonMessages);
  yield takeEvery(getPersonRanksStart.type, handleGetPersonRanks);
}
