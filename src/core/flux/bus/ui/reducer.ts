import { types } from '@flux/bus/ui/types';

import type { ReducerAction, Action } from '@flux/store';
import type { NumberObject, PickValues } from '@typings/utils';

const initialState = {
  fetching: {} as NumberObject,
} as const;

type InitialState = typeof initialState;

export type FetchingState = PickValues<InitialState, 'fetching'>;

export type FetchingAction = Action<typeof types.SET_FETCHING_STATE, FetchingState>;

type UIReducerAction = ReducerAction<FetchingAction>;

export const uiReducer = (state = initialState, action: UIReducerAction): InitialState => {
  switch (action.type) {
    case types.SET_FETCHING_STATE:
      return {
        ...state,
        fetching: action.payload,
      };

    default:
      return state;
  }
};
