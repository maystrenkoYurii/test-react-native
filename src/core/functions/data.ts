import { v4 as uuid } from 'uuid';

import type { DataItem } from '@typings/core';

export const keyExtractor = <T>(item: DataItem<T>): string => {
  return item.id?.toString() || uuid();
};
