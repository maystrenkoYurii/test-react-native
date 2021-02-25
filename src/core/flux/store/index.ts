import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import type { Action as ReduxAction } from 'redux';

import rootReducers from '@flux/bus/rootReducers';
import SagasManager from '@flux/bus/sagasManager';

import type { SagasAsyncTypes } from '@flux/bus/rootSagas';

export interface Action<T extends string, P> extends ReduxAction<T> {
  payload: P;
}

export type ReducerAction<T> = ReduxAction<SagasAsyncTypes> | T;

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({});

const middleware = applyMiddleware(sagaMiddleware);

const enhancers = composeEnhancers(middleware);

export const store = createStore(rootReducers, {}, enhancers);

export type StoreState = ReturnType<typeof store.getState>;

SagasManager.runSagas(sagaMiddleware);
