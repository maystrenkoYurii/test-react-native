import { call, put, select } from 'redux-saga/effects';

import type { SagaIterator } from 'redux-saga';

import { asyncTypes } from '@flux/bus/data/saga/asyncTypes';

import { callAddFetching, callRemoveFetching } from '@flux/bus/ui/saga/asyncActions';
import { setFollowersState } from '@flux/bus/data/actions';
import { getFollowers } from '@selectors/data';

import { emitResponseErrorMessage, throwResponseError } from '@functions/response';
import { followers } from '@core/api/data';

import type { ExtractResponse } from '@typings/utils';
import type { FollowersParams } from '@core/api/data';
import type { Action } from '@flux/store';

export interface FollowersPagePayload extends FollowersParams {
  fetching?: string;
}

export type FollowersPageAction = Action<typeof asyncTypes.CALL_FETCH_FOLLOWERS_PAGE, FollowersPagePayload>;

export function* callFetchFollowersPageWorker({ payload, type }: FollowersPageAction): SagaIterator {
  const { login, fetching = type } = payload;

  try {
    yield put(callAddFetching({ type: fetching }));

    const followersState: ReturnType<typeof getFollowers> = yield select(getFollowers);

    const response: ExtractResponse<typeof followers> = yield call(followers, payload);

    yield call(throwResponseError, response);

    yield put(setFollowersState({ ...followersState, [login]: [...followersState[login], ...response.data] }));
  } catch (error) {
    yield call(emitResponseErrorMessage, error);
  } finally {
    yield put(callRemoveFetching({ type: fetching }));
  }
}
