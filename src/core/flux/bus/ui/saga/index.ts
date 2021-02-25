import { takeEvery } from 'redux-saga/effects';

import type { SagaIterator } from 'redux-saga';

import { asyncTypes } from '@flux/bus/ui/saga/asyncTypes';

import { callAddFetchingWorker } from '@flux/bus/ui/saga/workers/addFetching';
import { callRemoveFetchingWorker } from '@flux/bus/ui/saga/workers/removeFetching';

export function* uiWatchersSagas(): SagaIterator {
  yield takeEvery(asyncTypes.CALL_ADD_FETCHING, callAddFetchingWorker);
  yield takeEvery(asyncTypes.CALL_REMOVE_FETCHING, callRemoveFetchingWorker);
}
