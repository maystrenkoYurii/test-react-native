import DropdownMessage from 'react-native-dropdownalert';
import { EventEmitter } from 'fbemitter';
import { get } from 'lodash';

import type { EventSubscription } from 'fbemitter';
import type { RefObject } from 'react';

import { constants } from '@core/constants';

import type { ShowDropdownMessage } from '@typings/common';

const emitter = new EventEmitter();

type MessageParams = Parameters<ShowDropdownMessage>;

export const addMessageListener = (ref: RefObject<DropdownMessage>, focused: boolean): EventSubscription => {
  return emitter.addListener(constants.GLOBAL_MESSAGE_EVENT, (params: MessageParams) => {
    focused && ref.current?.alertWithType(...params);

    get(ref.current, 'clearQueue')?.();
  });
};

export const emitMessageEvent = (...params: Partial<MessageParams>): void => {
  emitter.emit(constants.GLOBAL_MESSAGE_EVENT, params);
};

export const removeListener = (listener: EventSubscription): void => {
  listener.remove();
};
