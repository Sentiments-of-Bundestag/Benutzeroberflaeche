import { call, put, takeEvery } from 'redux-saga/effects';

import { UserInterface } from '../types';

import { request } from '../utils/client';
import {
  getUsersStart,
  getUsersSuccess,
  getUsersFailed,
} from '../slices/users';

const { REACT_APP_API_USERS_ENDPOINT } = process.env;

const apiUsersUrl = REACT_APP_API_USERS_ENDPOINT || '';

function* handleGetUsers() {
  try {
    const users: UserInterface[] = yield call(request, apiUsersUrl);
    yield put(getUsersSuccess(users));
  } catch (error) {
    yield put(getUsersFailed(error.toString()));
  }
}

export function* usersSaga() {
  yield takeEvery(getUsersStart.type, handleGetUsers);
}
