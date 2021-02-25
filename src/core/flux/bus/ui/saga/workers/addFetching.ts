import { put, call, select } from 'redux-saga/effects';

import type { SagaIterator } from 'redux-saga';

import { asyncTypes } from '@flux/bus/ui/saga/asyncTypes';

import { setFetchingState } from '@flux/bus/ui/actions';
import { getFetching } from '@selectors/ui';

import type { Action } from '@flux/store';

export interface FetchingAddPayload {
  type: string;
}

export type FetchingAddAction = Action<typeof asyncTypes.CALL_ADD_FETCHING, FetchingAddPayload>;

export function* callAddFetchingWorker({ payload }: FetchingAddAction): SagaIterator {
  const { type } = payload;

  const fetching: ReturnType<typeof getFetching> = yield select(getFetching);

  const updated = yield call(Object.assign, { ...fetching }, { [type]: new Date().getTime() });

  yield put(setFetchingState(updated));
}
