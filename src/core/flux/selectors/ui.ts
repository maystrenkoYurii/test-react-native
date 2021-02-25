import { createSelector } from '@functions/selector';

import type { StoreState } from '@flux/store';

export const getFetching = createSelector((state: StoreState) => {
  return state.ui.fetching;
});
