import { emitMessageEvent } from '@functions/eventEmitter';

export const emitSuccessMessage = (message?: string): void => {
  emitMessageEvent('success', 'Success', message);
};

export const emitErrorMessage = (message?: string): void => {
  emitMessageEvent('error', 'Error', message);
};

export const emitWarnMessage = (message?: string): void => {
  emitMessageEvent('warn', 'Warn', message);
};
