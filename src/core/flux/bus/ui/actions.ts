import { types } from '@flux/bus/ui/types';

import type { FetchingState, FetchingAction } from '@flux/bus/ui/reducer';

export const setFetchingState = (state: FetchingState): FetchingAction => ({
  type: types.SET_FETCHING_STATE,
  payload: state,
});
