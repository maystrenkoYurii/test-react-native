import { asyncTypes } from '@flux/bus/data/saga/asyncTypes';

import type { UsersPayload, UsersAction } from '@flux/bus/data/saga/workers/users';
import type { UsersPagePayload, UsersPageAction } from '@flux/bus/data/saga/workers/usersPage';

export const callFetchUsers = (state: UsersPayload = {}): UsersAction => ({
  type: asyncTypes.CALL_FETCH_USERS,
  payload: state,
});

export const callFetchUsersPage = (state: UsersPagePayload = {}): UsersPageAction => ({
  type: asyncTypes.CALL_FETCH_USERS_PAGE,
  payload: state,
});
