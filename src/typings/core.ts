import type { Nullable } from '@typings/utils';

export type NullableID = Nullable<string>;

export type DataItem<T> = T & { id: NullableID };

export interface PropsColor {
  color?: string;
}
