import { types } from '@flux/bus/data/types';

import type { ReducerAction, Action } from '@flux/store';
import type { PickValues } from '@typings/utils';

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

const initialState = {
  users: [] as User[],
  followers: {} as Record<string, User[]>,
} as const;

type InitialState = typeof initialState;

export type UsersState = PickValues<InitialState, 'users'>;
export type FollowersState = PickValues<InitialState, 'followers'>;

export type UsersAction = Action<typeof types.SET_USERS_STATE, UsersState>;
export type UsersAddAction = Action<typeof types.ADD_USERS_STATE, UsersState>;
export type FollowersAction = Action<typeof types.SET_FOLLOWERS_STATE, FollowersState>;

type DataReducerAction = ReducerAction<UsersAction | UsersAddAction | FollowersAction>;

export const uiReducer = (state = initialState, action: DataReducerAction): InitialState => {
  switch (action.type) {
    case types.SET_USERS_STATE:
      return {
        ...state,
        users: action.payload,
      };

    case types.ADD_USERS_STATE:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };

    case types.SET_FOLLOWERS_STATE:
      return {
        ...state,
        followers: action.payload,
      };

    default:
      return state;
  }
};
