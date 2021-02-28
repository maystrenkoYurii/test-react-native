import type { Values } from '@typings/utils';

export const asyncTypes = {
  CALL_FETCH_USERS: 'CALL_FETCH_USERS',
  CALL_FETCH_USERS_UPDATE: 'CALL_FETCH_USERS_UPDATE',
  CALL_FETCH_USERS_PAGE: 'CALL_FETCH_USERS_PAGE',
} as const;

export type DataAsyncTypes = Values<typeof asyncTypes>;
