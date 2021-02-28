import { asyncTypes } from '@flux/bus/data/saga/asyncTypes';

import type { UsersPayload, UsersAction } from '@flux/bus/data/saga/workers/users';

export const callFetchUsers = (state: UsersPayload): UsersAction => ({
  type: asyncTypes.CALL_FETCH_USERS,
  payload: state,
});
