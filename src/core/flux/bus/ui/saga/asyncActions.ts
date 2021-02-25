import { asyncTypes } from '@flux/bus/ui/saga/asyncTypes';

import type { FetchingAddPayload, FetchingAddAction } from '@flux/bus/ui/saga/workers/addFetching';
import type { FetchingRemovePayload, FetchingRemoveAction } from '@flux/bus/ui/saga/workers/removeFetching';

export const callAddFetching = (state: FetchingAddPayload): FetchingAddAction => ({
  type: asyncTypes.CALL_ADD_FETCHING,
  payload: state,
});

export const callRemoveFetching = (state: FetchingRemovePayload): FetchingRemoveAction => ({
  type: asyncTypes.CALL_REMOVE_FETCHING,
  payload: state,
});
