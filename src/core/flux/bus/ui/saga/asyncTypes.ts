import type { Values } from '@typings/utils';

export const asyncTypes = {
  CALL_ADD_FETCHING: 'CALL_ADD_FETCHING',
  CALL_REMOVE_FETCHING: 'CALL_REMOVE_FETCHING',
} as const;

export type UIAsyncTypes = Values<typeof asyncTypes>;
