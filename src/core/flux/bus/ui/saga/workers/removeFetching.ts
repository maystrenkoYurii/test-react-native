import { put, call, select } from 'redux-saga/effects';
import { omit } from 'lodash';

import type { SagaIterator } from 'redux-saga';

import { asyncTypes } from '@flux/bus/ui/saga/asyncTypes';

import { setFetchingState } from '@flux/bus/ui/actions';
import { getFetching } from '@selectors/ui';

import type { Action } from '@flux/store';

export interface FetchingRemovePayload {
  type: string;
}

export type FetchingRemoveAction = Action<typeof asyncTypes.CALL_REMOVE_FETCHING, FetchingRemovePayload>;

export function* callRemoveFetchingWorker({ payload }: FetchingRemoveAction): SagaIterator {
  const { type } = payload;

  const fetching: ReturnType<typeof getFetching> = yield select(getFetching);

  const updated = yield call(omit, fetching, [type]);

  yield put(setFetchingState(updated));
}
