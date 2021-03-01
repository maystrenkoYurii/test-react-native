import { call, put } from 'redux-saga/effects';

import type { SagaIterator } from 'redux-saga';

import { asyncTypes } from '@flux/bus/data/saga/asyncTypes';

import { callAddFetching, callRemoveFetching } from '@flux/bus/ui/saga/asyncActions';
import { addFollowersState } from '@flux/bus/data/actions';

import { emitResponseErrorMessage, throwResponseError } from '@functions/response';
import { followers } from '@core/api/data';

import type { ExtractResponse } from '@typings/utils';
import type { FollowersParams } from '@core/api/data';
import type { Action } from '@flux/store';

export interface FollowersPayload extends FollowersParams {
  fetching?: string;
}

export type FollowersAction = Action<typeof asyncTypes.CALL_FETCH_FOLLOWERS, FollowersPayload>;

export function* callFetchFollowersWorker({ payload, type }: FollowersAction): SagaIterator {
  const { login, fetching = type } = payload;

  try {
    yield put(callAddFetching({ type: fetching }));

    const response: ExtractResponse<typeof followers> = yield call(followers, payload);

    yield call(throwResponseError, response);

    yield put(addFollowersState({ [login]: response.data }));
  } catch (error) {
    yield call(emitResponseErrorMessage, error);
  } finally {
    yield put(callRemoveFetching({ type: fetching }));
  }
}
