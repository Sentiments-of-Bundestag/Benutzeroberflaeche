import { all, fork } from 'redux-saga/effects';
import { usersSaga } from './users';

// INSERT:
export function* rootSaga() {
  yield all([fork(usersSaga)]);
}
