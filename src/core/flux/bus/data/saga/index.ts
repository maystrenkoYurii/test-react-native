import { takeLatest } from 'redux-saga/effects';

import type { SagaIterator } from 'redux-saga';

import { asyncTypes } from '@flux/bus/data/saga/asyncTypes';

import { callFetchUsersWorker } from '@flux/bus/data/saga/workers/users';

export function* dataWatchersSagas(): SagaIterator {
  yield takeLatest(asyncTypes.CALL_FETCH_USERS, callFetchUsersWorker);
}
