import { all, fork } from 'redux-saga/effects';
import { usersSaga } from './users';
import { factionsSaga } from './factions';
import { personsSaga } from './persons';
import { sessionsSaga } from './sessions';

// INSERT:
export function* rootSaga() {
  yield all([fork(usersSaga)]);
  yield all([fork(factionsSaga)]);
  yield all([fork(personsSaga)]);
  yield all([fork(sessionsSaga)]);
}
