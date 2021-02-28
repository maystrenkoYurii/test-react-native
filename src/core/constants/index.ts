import type { Values } from '@typings/utils';

const colorScheme = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export const constants = {
  APP_ROOT: 'TestReactNative',

  COLOR_SCHEME: colorScheme,

  SCREEN_MAIN: 'SCREEN_MAIN',

  SCREEN_USERS: 'SCREEN_USERS',
  SCREEN_FOLLOWERS: 'SCREEN_FOLLOWERS',
} as const;

export type ColorScheme = Values<typeof constants.COLOR_SCHEME>;
