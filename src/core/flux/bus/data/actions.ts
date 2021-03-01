import { types } from '@flux/bus/data/types';

import type { UsersState, UsersAction, UsersAddAction, FollowersState, FollowersAction } from '@flux/bus/data/reducer';

export const setUsersState = (state: UsersState): UsersAction => ({
  type: types.SET_USERS_STATE,
  payload: state,
});

export const addUsersState = (state: UsersState): UsersAddAction => ({
  type: types.ADD_USERS_STATE,
  payload: state,
});

export const setFollowersState = (state: FollowersState): FollowersAction => ({
  type: types.SET_FOLLOWERS_STATE,
  payload: state,
});
