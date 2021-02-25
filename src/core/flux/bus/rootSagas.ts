import type { Saga } from 'redux-saga';

import { uiWatchersSagas } from '@flux/bus/ui/saga';

import type { UIAsyncTypes } from '@flux/bus/ui/saga/asyncTypes';

export const rootSagas: Saga[] = [uiWatchersSagas];

export type SagasAsyncTypes = UIAsyncTypes;
