import { asyncTypes } from '@flux/bus/data/saga/asyncTypes';

import type { UsersPayload, UsersAction } from '@flux/bus/data/saga/workers/users';
import type { UsersPagePayload, UsersPageAction } from '@flux/bus/data/saga/workers/usersPage';
import type { FollowersPayload, FollowersAction } from '@flux/bus/data/saga/workers/folowers';
import type { FollowersPagePayload, FollowersPageAction } from '@flux/bus/data/saga/workers/folowersPage';

export const callFetchUsers = (state: UsersPayload = {}): UsersAction => ({
  type: asyncTypes.CALL_FETCH_USERS,
  payload: state,
});

export const callFetchUsersPage = (state: UsersPagePayload = {}): UsersPageAction => ({
  type: asyncTypes.CALL_FETCH_USERS_PAGE,
  payload: state,
});

export const callFetchFollowers = (state: FollowersPayload): FollowersAction => ({
  type: asyncTypes.CALL_FETCH_FOLLOWERS,
  payload: state,
});

export const callFetchFollowersPage = (state: FollowersPagePayload): FollowersPageAction => ({
  type: asyncTypes.CALL_FETCH_FOLLOWERS_PAGE,
  payload: state,
});
