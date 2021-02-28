import DropdownMessage from 'react-native-dropdownalert';
import ReactNative from 'react-native';

import type { PickValues } from '@typings/utils';

export type ShowDropdownMessage = PickValues<DropdownMessage, 'alertWithType'>;

export type FlatListProps<T> = Partial<ReactNative.FlatListProps<T>>;
