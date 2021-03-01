import { call, put } from 'redux-saga/effects';

import type { SagaIterator } from 'redux-saga';

import { asyncTypes } from '@flux/bus/data/saga/asyncTypes';

import { callAddFetching, callRemoveFetching } from '@flux/bus/ui/saga/asyncActions';
import { setUsersState } from '@flux/bus/data/actions';

import { emitResponseErrorMessage, throwResponseError } from '@functions/response';
import { users } from '@core/api/data';

import type { ExtractResponse } from '@typings/utils';
import type { UsersParams } from '@core/api/data';
import type { Action } from '@flux/store';

export interface UsersPayload extends UsersParams {
  fetching?: string;
}

export type UsersAction = Action<typeof asyncTypes.CALL_FETCH_USERS, UsersPayload>;

export function* callFetchUsersWorker({ payload, type }: UsersAction): SagaIterator {
  const { fetching = type } = payload;

  try {
    yield put(callAddFetching({ type: fetching }));

    const response: ExtractResponse<typeof users> = yield call(users, payload);

    yield call(throwResponseError, response);

    yield put(setUsersState(response.data));
  } catch (error) {
    yield call(emitResponseErrorMessage, error);
  } finally {
    yield put(callRemoveFetching({ type: fetching }));
  }
}
