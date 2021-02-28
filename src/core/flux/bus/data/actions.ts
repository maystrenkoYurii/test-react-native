import { types } from '@flux/bus/data/types';

import type { UsersState, UsersAction } from '@flux/bus/data/reducer';

export const setUsersState = (state: UsersState): UsersAction => ({
  type: types.SET_USERS_STATE,
  payload: state,
});
