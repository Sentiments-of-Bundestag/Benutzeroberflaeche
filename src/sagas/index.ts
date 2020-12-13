import { all, fork } from 'redux-saga/effects';
import { usersSaga } from './users';
import { factionsSaga } from './factions';

// INSERT:
export function* rootSaga() {
  yield all([fork(usersSaga)]);
  yield all([fork(factionsSaga)]);
}
