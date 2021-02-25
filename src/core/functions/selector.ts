import type { Selector } from '@typings/utils';

export const createSelector = <S, R>(selector: Selector<S, R>): Selector<S, R> => selector;
