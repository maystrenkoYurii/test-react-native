import type { Saga } from 'redux-saga';

import { dataWatchersSagas } from '@flux/bus/data/saga';
import { uiWatchersSagas } from '@flux/bus/ui/saga';

import type { DataAsyncTypes } from '@flux/bus/data/saga/asyncTypes';
import type { UIAsyncTypes } from '@flux/bus/ui/saga/asyncTypes';

export const rootSagas: Saga[] = [dataWatchersSagas, uiWatchersSagas];

export type SagasAsyncTypes = DataAsyncTypes | UIAsyncTypes;
