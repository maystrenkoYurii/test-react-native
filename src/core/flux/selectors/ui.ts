import { createSelector } from '@functions/selector';

import { asyncTypes as dataAsyncTypes } from '@flux/bus/data/saga/asyncTypes';

import type { StoreState } from '@flux/store';

export const getFetching = createSelector((state: StoreState) => {
  return state.ui.fetching;
});

export const getUsersFetching = createSelector((state: StoreState) => {
  return Boolean(getFetching(state)[dataAsyncTypes.CALL_FETCH_USERS]);
});

export const getUsersUpdateFetching = createSelector((state: StoreState) => {
  return Boolean(getFetching(state)[dataAsyncTypes.CALL_FETCH_USERS_UPDATE]);
});

export const getUsersPageFetching = createSelector((state: StoreState) => {
  return Boolean(getFetching(state)[dataAsyncTypes.CALL_FETCH_USERS_PAGE]);
});
