import { combineReducers } from 'redux';

import { uiReducer as ui } from '@flux/bus/ui/reducer';

const combinedReducer = combineReducers({ ui });

const rootReducers: typeof combinedReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducers;
