import { createSelector } from '@functions/selector';

import type { StoreState } from '@flux/store';

export const getUsers = createSelector((state: StoreState) => {
  return state.data.users;
});
