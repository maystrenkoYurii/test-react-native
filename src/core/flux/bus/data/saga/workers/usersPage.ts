import { call, put } from 'redux-saga/effects';

import type { SagaIterator } from 'redux-saga';

import { asyncTypes } from '@flux/bus/data/saga/asyncTypes';

import { callAddFetching, callRemoveFetching } from '@flux/bus/ui/saga/asyncActions';
import { addUsersState } from '@flux/bus/data/actions';

import { emitResponseErrorMessage, throwResponseError } from '@functions/response';
import { users } from '@core/api/data';

import type { ExtractResponse } from '@typings/utils';
import type { UsersParams } from '@core/api/data';
import type { Action } from '@flux/store';

export interface UsersPagePayload extends UsersParams {
  fetching?: string;
}

export type UsersPageAction = Action<typeof asyncTypes.CALL_FETCH_USERS_PAGE, UsersPagePayload>;

export function* callFetchUsersPageWorker({ payload, type }: UsersPageAction): SagaIterator {
  const { fetching = type } = payload;

  try {
    yield put(callAddFetching({ type: fetching }));

    const response: ExtractResponse<typeof users> = yield call(users, payload);

    yield call(throwResponseError, response);

    yield put(addUsersState(response.data));
  } catch (error) {
    yield call(emitResponseErrorMessage, error);
  } finally {
    yield put(callRemoveFetching({ type: fetching }));
  }
}
