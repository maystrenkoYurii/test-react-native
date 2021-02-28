import * as SVG from 'react-native-svg';

import type { Nullable } from '@typings/utils';

export type NullableID = Nullable<string>;

export type DataItem<T> = T & { id: NullableID };

export interface IconProps extends SVG.SvgProps {
  size?: number;
}

export interface PropsColor {
  color?: string;
}
