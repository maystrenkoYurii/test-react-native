import { combineReducers } from 'redux';

import { uiReducer as data } from '@flux/bus/data/reducer';
import { uiReducer as ui } from '@flux/bus/ui/reducer';

const combinedReducer = combineReducers({ data, ui });

const rootReducers: typeof combinedReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducers;
